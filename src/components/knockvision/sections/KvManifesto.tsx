"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvManifesto() {
  const t = useTranslations("knockvision.manifesto");

  return (
    <section className="relative overflow-hidden text-cream">
      {/* ── Cinematic background ── */}
      <div className="absolute inset-0">
        <Image
          src="/knockvision/proyectos/auditorio-luna/01.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,12,18,0.82) 0%, rgba(10,12,18,0.6) 50%, rgba(10,12,18,0.85) 100%)",
          }}
        />
      </div>

      {/* ── Statement ── */}
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-32 md:py-60">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-1 md:pt-1">
            <KvReveal variant="fade" delay={0} duration={0.5}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40 mb-8 md:mb-0">
                {t("label")}
              </p>
            </KvReveal>
          </div>
          <div className="md:col-span-10 md:col-start-3">
            <KvReveal variant="up" delay={0.1} duration={1.1}>
              <p
                className="font-archivo font-black"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 5rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 1.04,
                }}
              >
                {t("body")}
              </p>
            </KvReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
