import Link from "next/link";
import { useTranslations } from "next-intl";

export default function KvFooter({ locale }: { locale: string }) {
  const t = useTranslations("knockvision.footer");
  const tNav = useTranslations("knockvision.nav");
  const base = `/${locale}/knockvision`;

  const navLinks = [
    { href: `${base}/proyectos`, label: tNav("projects") },
    { href: `${base}/arquitectura`, label: tNav("architecture") },
    { href: `${base}/producto`, label: tNav("product") },
    { href: `${base}/contacto`, label: tNav("contact") },
  ];

  const legal = [
    { href: `/${locale}/aviso-legal`, label: t("legal") },
    { href: `/${locale}/privacidad`, label: t("privacy") },
    { href: `/${locale}/cookies`, label: t("cookies") },
  ];

  return (
    <footer className="bg-cream text-[#1A1A1A] border-t border-[#1A1A1A]/[0.09]">

      {/* Main block */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-16 md:pb-24 grid gap-16 md:grid-cols-12">

        {/* Claim — 7 cols, big display */}
        <div className="md:col-span-7">
          <p
            className="font-archivo font-black"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.97,
            }}
          >
            {t("claim")}
          </p>
          <p
            className="mt-7 font-archivo text-[#1A1A1A]/50 max-w-sm"
            style={{ fontSize: "clamp(0.88rem, 0.9vw, 0.95rem)", letterSpacing: "-0.01em", lineHeight: 1.6 }}
          >
            {t("descriptor")}
          </p>
        </div>

        {/* Nav links */}
        <div className="md:col-span-2 md:col-start-9">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 mb-6">
            {t("explore")}
          </p>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-archivo text-sm text-[#1A1A1A]/55 hover:text-[#1A1A1A] transition-colors duration-300"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div className="md:col-span-2 md:col-start-11">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 mb-6">
            {t("studio")}
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href={`/${locale}`}
                className="font-archivo text-sm text-[#1A1A1A]/55 hover:text-[#1A1A1A] transition-colors duration-300 flex items-center gap-1 group"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span>Knocklabs</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-6 border-t border-[#1A1A1A]/[0.09] flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/30">
          © {new Date().getFullYear()} Knockvision · Knocklabs
        </span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {legal.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
