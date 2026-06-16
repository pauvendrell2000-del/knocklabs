"use client";

import { useTranslations, useLocale } from "next-intl";
import { kvServices } from "@/data/knockvision-projects";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvServicesList() {
  const t = useTranslations("knockvision.services");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="bg-cream text-[#1A1A1A] py-14 md:py-20 border-t border-[#1A1A1A]/[0.09]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">

        <KvReveal variant="fade" delay={0} duration={0.5}>
          <div className="flex items-baseline justify-between mb-8 md:mb-10">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35">
              {t("label")}
            </p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/25">
              {String(kvServices.length).padStart(2, "0")}
            </p>
          </div>
        </KvReveal>

        <ul>
          {kvServices.map((s, i) => (
            <KvReveal key={s.key} variant="up" delay={i * 0.06} duration={0.7}>
              <li className="group grid md:grid-cols-12 items-baseline py-4 md:py-5 border-t border-[#1A1A1A]/[0.09] last:border-b cursor-default">
                {/* Number */}
                <div className="hidden md:block md:col-span-1">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-kv-accent/70 transition-opacity duration-300 group-hover:opacity-100">
                    {s.num}
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-5 mb-2 md:mb-0">
                  <h3
                    className="font-archivo font-black transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      fontSize: "clamp(1.05rem, 1.9vw, 1.65rem)",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.title[locale]}
                  </h3>
                </div>
                {/* Description — pushed right */}
                <div className="md:col-span-4 md:col-start-9">
                  <p
                    className="font-archivo text-[#1A1A1A]/50 transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                      letterSpacing: "-0.005em",
                      lineHeight: 1.55,
                    }}
                  >
                    {s.desc[locale]}
                  </p>
                </div>
              </li>
            </KvReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
