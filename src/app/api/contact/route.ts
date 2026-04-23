import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional(), // honeypot
  elapsed: z.number().optional(),
});

// Simple in-memory rate limiter: 3 submissions per IP per minute
const rateMap = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const { name, email, company, message, website, elapsed } = parsed.data;

  // Honeypot check
  if (website && website.length > 0) {
    return NextResponse.json({ success: true }); // silent reject
  }

  // Timestamp honeypot: form submitted too fast (<3s) is likely a bot
  if (typeof elapsed === "number" && elapsed < 3000) {
    return NextResponse.json({ success: true }); // silent reject
  }

  const safeName = escapeHtml(name);
  const safeCompany = company ? escapeHtml(company) : null;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  try {
    const { error } = await resend.emails.send({
      from: "Knock Labs <noreply@knocklabs.com>",
      to: ["hola@knocklabs.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${safeName}${safeCompany ? ` (${safeCompany})` : ""}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#0D0D0D;color:#F2F0EB;">
          <h2 style="color:#FF4C00;letter-spacing:-0.02em;margin-bottom:24px;">Nuevo contacto — Knock Labs</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:12px;">NOMBRE</td><td style="padding:8px 0;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:12px;">EMAIL</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
            ${safeCompany ? `<tr><td style="padding:8px 0;color:#888;font-size:12px;">EMPRESA</td><td style="padding:8px 0;">${safeCompany}</td></tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #2A2A2A;margin:24px 0;" />
          <p style="line-height:1.6;color:#F2F0EB;">${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error.message);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
