"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactCTA() {
  const t = useTranslations("contact_cta");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <section className="border-t border-dark02 py-32 md:py-40 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto overflow-hidden relative">
      <ScrollReveal>
        <p className="section-label mb-10">{t("label")}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <p
          className="font-mono text-[11px] text-cream/30 tracking-widest uppercase mb-4"
        >
          {t("title")}
        </p>
        <h2
          className="font-archivo font-black text-cream mb-12"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", letterSpacing: "-0.035em", lineHeight: 0.9 }}
        >
          {t("sub")}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.18}>
        <Link
          href={lp("/contact")}
          className="inline-flex items-center gap-3 bg-accent text-cream font-archivo font-black px-8 py-4 hover:bg-cream hover:text-base transition-colors duration-200"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em" }}
        >
          {t("cta")}
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </Link>
      </ScrollReveal>

      <div
        className="absolute -right-8 -bottom-16 font-archivo font-black select-none pointer-events-none hidden md:block text-dark01"
        style={{ fontSize: "clamp(12rem, 30vw, 28rem)", letterSpacing: "-0.06em", lineHeight: 1 }}
        aria-hidden
      >
        ?
      </div>
    </section>
  );
}
