"use client";

import { useLocale } from "next-intl";
import { kvServices } from "@/data/knockvision-projects";
import KvReveal from "@/components/knockvision/ui/KvReveal";

const copy = {
  es: {
    label: "// Estudio de visualización",
    body: "Convertimos arquitectura y producto en imágenes que convencen.",
    sub: "Knockvision es el estudio de visualización de Knocklabs. Render, dirección de arte e imagen de campaña 3D para estudios, promotores y marcas.",
  },
  en: {
    label: "// Visualization studio",
    body: "We turn architecture and product into images that convince.",
    sub: "Knockvision is the visualization studio of Knocklabs. Rendering, art direction and 3D campaign imagery for studios, developers and brands.",
  },
};

export default function KvIntro() {
  const locale = useLocale() as "es" | "en";
  const t = copy[locale] ?? copy.es;

  return (
    <section className="bg-cream text-[#1A1A1A] py-24 md:py-40">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Statement */}
          <div className="md:col-span-8">
            <KvReveal variant="fade" delay={0} duration={0.5}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 mb-8">
                {t.label}
              </p>
            </KvReveal>
            <KvReveal variant="up" delay={0.1} duration={1}>
              <h2
                className="font-archivo font-black"
                style={{
                  fontSize: "clamp(1.9rem, 4.2vw, 3.75rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 1.05,
                }}
              >
                {t.body}
              </h2>
            </KvReveal>
            <KvReveal variant="fade" delay={0.28} duration={0.7}>
              <p
                className="mt-8 max-w-xl font-archivo text-[#1A1A1A]/55"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)", lineHeight: 1.6 }}
              >
                {t.sub}
              </p>
            </KvReveal>
          </div>

          {/* Services list — what we do */}
          <div className="md:col-span-4 md:pt-2">
            <ul className="flex flex-col">
              {kvServices.map((s, i) => (
                <KvReveal key={s.key} variant="up" delay={0.2 + i * 0.07} duration={0.6}>
                  <li className="flex items-baseline gap-4 border-t border-[#1A1A1A]/[0.12] py-4">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-kv-accent/70">
                      {s.num}
                    </span>
                    <span
                      className="font-archivo font-medium"
                      style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "-0.02em" }}
                    >
                      {s.title[locale]}
                    </span>
                  </li>
                </KvReveal>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
