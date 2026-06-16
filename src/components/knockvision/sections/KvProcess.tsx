"use client";

import { useTranslations } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

const STEPS = [
  { num: "01", key: "brief" },
  { num: "02", key: "direction" },
  { num: "03", key: "production" },
  { num: "04", key: "delivery" },
] as const;

export default function KvProcess() {
  const t = useTranslations("knockvision.process");

  return (
    <section className="bg-cream text-[#1A1A1A] py-24 md:py-44 border-t border-[#1A1A1A]/[0.09]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">

        {/* Header row */}
        <KvReveal variant="fade" delay={0} duration={0.5}>
          <div className="flex items-baseline justify-between mb-20 md:mb-28">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35">
              {t("label")}
            </p>
            <p
              className="font-archivo font-black text-[#1A1A1A]/20 hidden md:block"
              style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)", letterSpacing: "-0.025em" }}
            >
              {t("title")}
            </p>
          </div>
        </KvReveal>

        {/* Steps — 4-col grid desktop, stacked mobile */}
        <div className="grid gap-12 md:gap-10 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <KvReveal key={s.key} variant="up" delay={0.08 + i * 0.09} duration={0.75}>
              <div className="border-t border-[#1A1A1A]/[0.09] pt-7 md:pt-8">
                <span
                  className="block font-archivo font-black text-kv-accent/25 leading-none -mt-1"
                  style={{ fontSize: "clamp(3rem, 4.5vw, 5rem)", letterSpacing: "-0.05em" }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-archivo font-black mt-6"
                  style={{
                    fontSize: "clamp(1.35rem, 1.9vw, 1.85rem)",
                    letterSpacing: "-0.035em",
                    lineHeight: 1,
                  }}
                >
                  {t(`steps.${s.key}.title`)}
                </h3>
                <p
                  className="mt-4 font-archivo text-[#1A1A1A]/50"
                  style={{
                    fontSize: "clamp(0.85rem, 0.92vw, 0.95rem)",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.6,
                  }}
                >
                  {t(`steps.${s.key}.desc`)}
                </p>
              </div>
            </KvReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
