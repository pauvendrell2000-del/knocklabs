"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { kvCategories } from "@/data/knockvision-projects";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvCategories() {
  const t = useTranslations("knockvision.categories");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="bg-cream text-[#1A1A1A] py-20 md:py-44 border-t border-[#1A1A1A]/[0.09]">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">

        <KvReveal variant="fade" delay={0} duration={0.5}>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 mb-12 md:mb-16">
            {t("label")}
          </p>
        </KvReveal>

        <ul className="mt-0">
          {kvCategories.map((c, i) => (
            <KvReveal key={c.id} variant="up" delay={i * 0.05} duration={0.65}>
              <li className="border-t border-[#1A1A1A]/[0.09] last:border-b">
                <Link
                  href={`/${locale}/knockvision/proyectos?cat=${c.id}`}
                  className="group flex items-center justify-between py-5 md:py-7"
                >
                  <span className="flex items-center gap-5 md:gap-9">
                    {/* Number: hidden on mobile, compact on desktop */}
                    <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] uppercase text-kv-accent/60 w-8 shrink-0 transition-opacity duration-300 group-hover:opacity-100">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-archivo font-black transition-all duration-500 group-hover:translate-x-1.5 group-hover:opacity-50"
                      style={{
                        fontSize: "clamp(1.5rem, 4.2vw, 3.75rem)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {c.label[locale]}
                    </span>
                  </span>

                  {/* CTA arrow — appears on hover */}
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-kv-accent/0 group-hover:text-kv-accent/80 transition-all duration-300 hidden md:inline translate-x-2 group-hover:translate-x-0">
                    {t("cta")} ↗
                  </span>
                </Link>
              </li>
            </KvReveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
