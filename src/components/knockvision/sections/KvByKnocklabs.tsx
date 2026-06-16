"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvByKnocklabs() {
  const t = useTranslations("knockvision.byKnocklabs");
  const locale = useLocale();

  return (
    <section className="bg-[#151515] text-cream">
      <div className="grid md:grid-cols-2">

        {/* ── Image side ── */}
        <div className="relative min-h-[60vh] md:min-h-[88vh] overflow-hidden">
          <Image
            src="/knockvision/proyectos/villa-xero/06.webp"
            alt="Knockvision — render arquitectónico por Knocklabs"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(21,21,21,0) 60%, rgba(21,21,21,0.6) 100%)",
            }}
          />
        </div>

        {/* ── Text side ── */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 md:py-0">
          <KvReveal variant="fade" delay={0} duration={0.5}>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-10">
              {t("label")}
            </p>
          </KvReveal>

          <KvReveal variant="up" delay={0.1} duration={1}>
            <p
              className="font-archivo font-black max-w-[18ch]"
              style={{
                fontSize: "clamp(1.65rem, 3.4vw, 3.25rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
              }}
            >
              {t("body")}
            </p>
          </KvReveal>

          <KvReveal variant="fade" delay={0.32} duration={0.6}>
            <Link
              href={`/${locale}`}
              className="mt-12 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40 hover:text-cream transition-colors duration-400 group w-fit"
            >
              <span>{t("cta")}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </KvReveal>
        </div>

      </div>
    </section>
  );
}
