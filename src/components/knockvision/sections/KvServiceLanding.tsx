"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  kvCategories,
  kvProjects,
  kvServices,
  type KvCategory,
} from "@/data/knockvision-projects";
import KvImage from "@/components/knockvision/ui/KvImage";
import KvReveal from "@/components/knockvision/ui/KvReveal";

const CAPABILITIES: Record<"architecture" | "product", { es: string[]; en: string[] }> = {
  architecture: {
    es: ["Exterior day & dusk", "Interiores y secciones", "Planos y axonometrías 3D", "Imágenes aéreas", "Material para concursos", "Pre-venta y preventas"],
    en: ["Exterior day & dusk", "Interiors & sections", "3D plans & axonometrics", "Aerial imagery", "Competition material", "Pre-sale & developer packs"],
  },
  product: {
    es: ["Still life editorial", "360° de producto", "Galería para e-commerce", "Key visual de campaña", "Pack shots y detalles", "Exploración de materiales"],
    en: ["Editorial still life", "360° product", "E-commerce gallery", "Campaign key visual", "Pack shots & details", "Material exploration"],
  },
};

export default function KvServiceLanding({
  serviceKey,
  category,
}: {
  serviceKey: "architecture" | "product";
  category: KvCategory;
}) {
  const locale = useLocale() as "es" | "en";
  const t = useTranslations(`knockvision.servicePage.${serviceKey}`);
  const tShared = useTranslations("knockvision.servicePage");
  const items = kvProjects.filter((p) => p.category === category).slice(0, 4);
  const cat = kvCategories.find((c) => c.id === category);
  const service = kvServices.find(
    (s) => s.key === (serviceKey === "architecture" ? "architectural-visualization" : "product-rendering")
  );
  const caps = CAPABILITIES[serviceKey][locale];

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream text-[#1A1A1A] pt-40 md:pt-52 pb-20 md:pb-36">
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
          <KvReveal variant="fade" delay={0.1} duration={0.5}>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 mb-8 md:mb-10">
              {cat?.label[locale]}
            </p>
          </KvReveal>
          <KvReveal variant="up" delay={0.15} duration={1}>
            <h1
              className="font-archivo font-black"
              style={{ fontSize: "clamp(2.75rem, 9.5vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
            >
              {t("title")}
            </h1>
          </KvReveal>
          <div className="mt-14 md:mt-24 grid md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-8">
              <KvReveal variant="up" delay={0.28} duration={0.85}>
                <p
                  className="font-archivo text-[#1A1A1A]/60"
                  style={{ fontSize: "clamp(1rem, 1.25vw, 1.2rem)", letterSpacing: "-0.01em", lineHeight: 1.55 }}
                >
                  {t("intro")}
                </p>
              </KvReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-cream text-[#1A1A1A] py-20 md:py-36 border-t border-[#1A1A1A]/[0.09]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <KvReveal variant="fade" delay={0} duration={0.5}>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 mb-6">
                  {tShared("capabilities")}
                </p>
                {service && (
                  <p
                    className="font-archivo text-[#1A1A1A]/50"
                    style={{ fontSize: "clamp(0.85rem, 0.9vw, 0.95rem)", lineHeight: 1.6, letterSpacing: "-0.005em" }}
                  >
                    {service.desc[locale]}
                  </p>
                )}
              </KvReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-0">
                {caps.map((cap, i) => (
                  <KvReveal key={cap} variant="up" delay={i * 0.05} duration={0.6}>
                    <li className="flex items-baseline gap-3 border-b border-[#1A1A1A]/[0.09] py-4 md:py-5">
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#1A1A1A]/25 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-archivo text-[#1A1A1A]"
                        style={{ fontSize: "clamp(0.85rem, 0.9vw, 0.95rem)", letterSpacing: "-0.01em" }}
                      >
                        {cap}
                      </span>
                    </li>
                  </KvReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related projects ── */}
      {items.length > 0 && (
        <section className="bg-cream text-[#1A1A1A] py-24 md:py-44 border-t border-[#1A1A1A]/[0.09]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
            <KvReveal variant="fade" delay={0} duration={0.5}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 mb-14 md:mb-16">
                {tShared("relatedWork")}
              </p>
            </KvReveal>
            <div className="grid gap-x-8 gap-y-16 md:gap-y-20 md:grid-cols-2">
              {items.map((p, i) => (
                <KvReveal key={p.slug} variant="up" delay={i * 0.08} duration={0.75}>
                  <Link href={`/${locale}/knockvision/proyectos/${p.slug}`} className="group block">
                    <div className="overflow-hidden">
                      <KvImage image={p.cover} sizes="(min-width: 768px) 44vw, 100vw" />
                    </div>
                    <h3
                      className="mt-5 font-archivo font-black transition-opacity duration-300 group-hover:opacity-50"
                      style={{ fontSize: "clamp(1.1rem, 1.7vw, 1.55rem)", letterSpacing: "-0.03em" }}
                    >
                      {p.title[locale]}
                    </h3>
                  </Link>
                </KvReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
