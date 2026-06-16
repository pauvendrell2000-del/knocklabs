"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

const HERO_SRC = "/knockvision/proyectos/arena-penasco/05.webp";

export default function KvHero() {
  const t = useTranslations("knockvision.hero");

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>

      {/* ── Background image full-bleed ── */}
      <div className="absolute inset-0">
        <Image
          src={HERO_SRC}
          alt="Render arquitectónico — Knockvision"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay: transparent top → dark bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,26,26,0) 30%, rgba(26,26,26,0.55) 65%, rgba(26,26,26,0.88) 100%)",
          }}
        />
      </div>

      {/* ── Content — pinned to bottom ── */}
      <div className="relative h-full flex flex-col justify-between max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-12 md:pb-16">

        {/* Top label */}
        <KvReveal variant="fade" delay={0.08} duration={0.5}>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/50">
            {t("label")}
          </p>
        </KvReveal>

        {/* Bottom block: headline + subcopy */}
        <div>
          {/* Headline */}
          <h1 aria-label={`${t("line1")} ${t("line2")} ${t("line3")}`}>
            <KvReveal variant="up" delay={0.12} duration={1}>
              <span
                className="block font-archivo font-black leading-none text-white"
                style={{ fontSize: "clamp(2.5rem, 8.5vw, 8.5rem)", letterSpacing: "-0.05em" }}
              >
                {t("line1")}
              </span>
            </KvReveal>
            <KvReveal variant="up" delay={0.19} duration={1}>
              <span
                className="block font-archivo font-black leading-none text-white"
                style={{ fontSize: "clamp(2.5rem, 8.5vw, 8.5rem)", letterSpacing: "-0.05em" }}
              >
                {t("line2")}
              </span>
            </KvReveal>
            <KvReveal variant="up" delay={0.26} duration={1}>
              <span
                className="block font-archivo font-black leading-none text-white/35"
                style={{ fontSize: "clamp(2.5rem, 8.5vw, 8.5rem)", letterSpacing: "-0.05em" }}
              >
                {t("line3")}
              </span>
            </KvReveal>
          </h1>

          {/* Sub copy + descriptor — right-aligned, below headline */}
          <KvReveal variant="up" delay={0.38} duration={0.85}>
            <div className="mt-8 md:mt-10 grid md:grid-cols-12">
              <div className="md:col-span-4 md:col-start-9">
                <p
                  className="font-archivo text-white/60"
                  style={{
                    fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.55,
                  }}
                >
                  {t("sub")}
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-white/30">
                  {t("descriptor")}
                </p>
              </div>
            </div>
          </KvReveal>
        </div>

      </div>
    </section>
  );
}
