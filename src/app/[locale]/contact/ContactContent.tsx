"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";

const inputLight =
  "w-full bg-transparent border-b border-[#0D0D0D]/15 py-4 text-[#0D0D0D] font-archivo text-base placeholder:text-[#0D0D0D]/30 focus:outline-none focus:border-accent transition-colors duration-200";

export default function ContactPage() {
  const t = useTranslations("contact");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          elapsed: Date.now() - mountedAt.current,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "", website: "" });
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const email = t("info.email");

  const consentText = t("consent");
  const consentParts = consentText.split(/<link>|<\/link>/);

  return (
    <div>
      <div className="pt-40 pb-24 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <ScrollReveal>
          <p className="section-label mb-6">{t("label")}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1
            className="font-archivo font-black text-cream"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.035em" }}
          >
            {t("title")}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p
            className="font-archivo text-cream/40 text-base mt-8 max-w-md leading-relaxed"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t("sub")}
          </p>
        </ScrollReveal>
      </div>

      <div className="bg-cream py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <ScrollReveal>
            <div className="flex flex-col gap-10">
              {[
                { label: "Email", value: email, href: `mailto:${email}` },
                { label: "Ubicación", value: t("info.location"), href: null },
                { label: "Respuesta", value: t("info.response"), href: null },
              ].map(({ label, value, href }) => (
                <div key={value} className="border-b border-[#0D0D0D]/10 pb-6">
                  <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="nav-underline font-archivo text-[#0D0D0D] text-base pb-px"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-archivo text-[#0D0D0D]/60 text-base" style={{ letterSpacing: "-0.02em" }}>
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {status === "success" ? (
              <motion.div
                className="flex flex-col justify-center gap-4 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-12 h-12 bg-accent flex items-center justify-center text-cream font-black text-xl">✓</div>
                <h3
                  className="font-archivo font-black text-[#0D0D0D]"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.03em" }}
                >
                  {t("success_title")}
                </h3>
                <p className="font-archivo text-[#0D0D0D]/50 text-sm">{t("success_sub")}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs text-accent tracking-widest uppercase mt-4 w-fit hover:text-[#0D0D0D] transition-colors"
                >
                  {t("success_reset")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t("fields.name")}
                    required
                    maxLength={120}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputLight}
                  />
                  <input
                    type="email"
                    placeholder={t("fields.email")}
                    required
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputLight}
                  />
                </div>
                <input
                  type="text"
                  placeholder={t("fields.company")}
                  maxLength={200}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputLight}
                />
                <textarea
                  placeholder={t("fields.message")}
                  required
                  rows={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputLight} resize-none`}
                />

                <label className="flex items-start gap-3 cursor-pointer group pt-2">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false); }}
                    className="mt-1 accent-accent shrink-0"
                  />
                  <span className="font-archivo text-[#0D0D0D]/60 text-sm leading-snug" style={{ letterSpacing: "-0.01em" }}>
                    {consentParts[0]}
                    <Link href={`/${locale}/privacidad`} className="underline hover:text-accent">
                      {consentParts[1]}
                    </Link>
                    {consentParts[2]}
                  </span>
                </label>
                {consentError && (
                  <p className="font-mono text-xs text-red-500 tracking-wide">{t("consent_error")}</p>
                )}

                {status === "error" && (
                  <p className="font-mono text-xs text-red-500 tracking-wide">{t("error")}</p>
                )}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="self-start bg-accent text-cream font-archivo font-black text-sm px-8 py-4 hover:bg-[#0D0D0D] hover:text-cream transition-colors duration-200 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" ? t("sending") : t("cta")}
                </motion.button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
