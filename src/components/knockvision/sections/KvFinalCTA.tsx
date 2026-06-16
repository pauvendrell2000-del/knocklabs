"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvFinalCTA() {
  const t = useTranslations("knockvision.finalCta");
  const locale = useLocale();
  const base = `/${locale}/knockvision`;

  return (
    <section className="bg-[#151515] text-cream py-32 md:py-60 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">

        <KvReveal variant="fade" delay={0} duration={0.5}>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-10">
            {t("label")}
          </p>
        </KvReveal>

        <KvReveal variant="up" delay={0.1} duration={1}>
          <p
            className="font-archivo font-black"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 6.5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.97,
              maxWidth: "14em",
            }}
          >
            {t("title")}
          </p>
        </KvReveal>

        <KvReveal variant="up" delay={0.26} duration={0.75}>
          <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-4">
            <Link
              href={`${base}/contacto`}
              className="inline-flex font-archivo font-semibold px-7 py-3.5 bg-kv-accent text-[#1A1A1A] hover:bg-[#57ABD0] transition-colors duration-300 text-sm"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("primary")}
            </Link>
            <Link
              href={`${base}/proyectos`}
              className="inline-flex font-archivo font-semibold px-7 py-3.5 border border-cream/20 text-cream hover:border-cream/50 hover:text-cream transition-colors duration-300 text-sm"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("secondary")}
            </Link>
          </div>
        </KvReveal>

      </div>
    </section>
  );
}
