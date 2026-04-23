"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import AsciiLogo from "@/components/ui/AsciiLogo";
import AsciiGlitch from "@/components/ui/AsciiGlitch";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <footer className="border-t border-dark02 bg-dark01 mt-0 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-24 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20 border-b border-dark02">
          {/* Brand */}
          <div className="md:col-span-4">
            <div
              className="bg-cream text-base font-archivo font-black px-3 py-2 inline-block mb-6 hover:bg-accent hover:text-cream transition-colors duration-200"
              style={{ letterSpacing: "-0.06em" }}
            >
              KNOCK
            </div>
            <p
              className="text-cream/30 font-archivo text-sm leading-relaxed max-w-[220px]"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] text-cream/20 tracking-widest uppercase mb-5">{t("pages")}</p>
            <div className="flex flex-col gap-3">
              {[
                { href: lp("/work"), label: t("links.work") },
                { href: lp("/services"), label: t("links.services") },
                { href: lp("/about"), label: t("links.about") },
                { href: lp("/contact"), label: t("links.contact") },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="nav-underline text-cream/40 hover:text-cream font-archivo text-sm transition-colors duration-200 w-fit pb-px"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] text-cream/20 tracking-widest uppercase mb-5">{t("location")}</p>
            <a
              href={`mailto:${t("email")}`}
              className="nav-underline text-cream/40 hover:text-cream font-archivo text-sm transition-colors duration-200 pb-px block w-fit"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("email")}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-mono text-[11px] text-cream/20 tracking-wide">{t("legal")}</p>
          <div className="flex gap-5">
            {[
              { href: lp("/aviso-legal"), label: t("legal_links.legal") },
              { href: lp("/privacidad"), label: t("legal_links.privacy") },
              { href: lp("/cookies"), label: t("legal_links.cookies") },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[11px] text-cream/20 hover:text-cream/50 transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ASCII art section — like good-fella */}
      <div className="relative border-t border-dark02 mt-0 overflow-hidden">
        {/* Glitch field background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035]">
          <AsciiGlitch rows={18} cols={120} color="#FF4C00" density={0.6} speed={150} />
        </div>

        {/* ASCII Logo centered */}
        <div className="relative py-16 md:py-24 flex flex-col items-center gap-6">
          <AsciiLogo color="#FF4C00" opacity={0.55} />

          {/* Status line */}
          <p className="font-mono text-[10px] text-cream/15 tracking-[0.3em] uppercase">
            {`// system online — ${t("location")}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
