"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactCTA from "@/components/sections/ContactCTA";
import type { Service } from "@/data/services";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

type Props = { service: Service; locale: "es" | "en"; nextService?: Service };

export default function ServiceDetail({ service, locale, nextService }: Props) {
  const shouldReduce = useReducedMotion();

  const L = {
    es: {
      back: "← Servicios",
      service: "Servicio",
      what: "Qué hacemos",
      process: "Proceso",
      deliverables: "Entregables",
      idealFor: "Ideal para",
      next: "Siguiente servicio",
      cta: "Hablemos de tu proyecto",
    },
    en: {
      back: "← Services",
      service: "Service",
      what: "What we do",
      process: "Process",
      deliverables: "Deliverables",
      idealFor: "Ideal for",
      next: "Next service",
      cta: "Let's talk about your project",
    },
  }[locale];

  return (
    <div className="bg-cream text-[#0D0D0D]">
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="pt-36 pb-16 md:pb-24 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <ScrollReveal>
            <Link
              href={`/${locale}/services`}
              className="font-mono text-[10px] text-[#0D0D0D]/40 hover:text-[#0D0D0D] transition-colors tracking-widest uppercase"
            >
              {L.back}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="font-mono text-[10px] text-[#0D0D0D]/30 tracking-widest uppercase">
              {service.num} / 06 — {L.service}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          <div className="md:col-span-8 flex flex-col gap-10">
            <ScrollReveal delay={0.08}>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: service.color === "#F2F0EB" ? "#0D0D0D" : service.color }}
              >
                {"// "}{service.tags.join(" · ")}
              </p>
              <h1
                className="font-archivo font-black text-[#0D0D0D]"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 9rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                }}
              >
                {service.name[locale]}.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="font-archivo text-[#0D0D0D]/60 text-lg md:text-xl"
                style={{ letterSpacing: "-0.015em", maxWidth: "52ch", lineHeight: 1.4 }}
              >
                {service.tagline[locale]}
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-4 md:pl-12 md:border-l border-[#0D0D0D]/10 flex flex-col justify-end">
            <ScrollReveal delay={0.28}>
              <p
                className="font-archivo text-[#0D0D0D]/70 leading-relaxed text-base"
                style={{ letterSpacing: "-0.01em" }}
              >
                {service.intro[locale]}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ COLOR BAND ════════════════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto pb-16 md:pb-24">
        <motion.div
          className="relative w-full overflow-hidden flex items-center justify-center"
          style={{ aspectRatio: "16/6", backgroundColor: service.color }}
          initial={shouldReduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span
            className="absolute -bottom-10 -right-4 md:-right-8 font-archivo font-black select-none pointer-events-none"
            style={{
              fontSize: "clamp(16rem, 42vw, 40rem)",
              color: "#0D0D0D",
              opacity: 0.09,
              letterSpacing: "-0.06em",
              lineHeight: 0.8,
            }}
          >
            {service.num}
          </span>
          <p
            className="relative font-archivo font-black text-[#0D0D0D] text-center px-6"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1,
              maxWidth: "22ch",
            }}
          >
            {service.tagline[locale]}
          </p>
          <p className="absolute top-5 left-5 md:top-7 md:left-7 font-mono text-[10px] text-[#0D0D0D] tracking-widest uppercase opacity-70">
            {"// "}{service.slug}
          </p>
        </motion.div>
      </section>

      {/* ══ OFFERINGS ═════════════════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto border-t border-[#0D0D0D]/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: service.color === "#F2F0EB" ? "#0D0D0D" : service.color }}
              >
                {"// "}{L.what}
              </p>
              <h2
                className="font-archivo font-black text-[#0D0D0D]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.035em", lineHeight: 1 }}
              >
                {locale === "es" ? "Cuatro frentes." : "Four fronts."}
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-8 md:col-start-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0D0D0D]/10">
          {service.offerings.map((o, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="bg-cream p-10 md:p-12 flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-[#0D0D0D]/40 tracking-widest">0{i + 1}</span>
                  <span className="w-8 h-[2px]" style={{ backgroundColor: service.color === "#F2F0EB" ? "#0D0D0D" : service.color }} />
                </div>
                <h3
                  className="font-archivo font-black text-[#0D0D0D] mt-4"
                  style={{ fontSize: "clamp(1.35rem, 2vw, 1.75rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
                >
                  {o.title[locale]}
                </h3>
                <p
                  className="font-archivo text-[#0D0D0D]/60 leading-relaxed text-base"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {o.desc[locale]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══ PROCESS — dark ════════════════════════════════════════ */}
      <section className="bg-[#0D0D0D] text-cream">
        <div className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
            <div className="md:col-span-4">
              <ScrollReveal>
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-8"
                  style={{ color: service.color }}
                >
                  {"// "}{L.process}
                </p>
                <h2
                  className="font-archivo font-black text-cream"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.035em", lineHeight: 1 }}
                >
                  {locale === "es" ? "Cómo trabajamos." : "How we work."}
                </h2>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/10">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-[#0D0D0D] p-8 md:p-10 flex flex-col gap-5 h-full min-h-[260px]">
                  <span
                    className="font-archivo font-black"
                    style={{
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      color: service.color,
                      letterSpacing: "-0.04em",
                      lineHeight: 0.9,
                    }}
                  >
                    {step.num}
                  </span>
                  <div className="h-px w-8" style={{ backgroundColor: service.color }} />
                  <h3
                    className="font-archivo font-black text-cream"
                    style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
                  >
                    {step.title[locale]}
                  </h3>
                  <p className="font-archivo text-cream/50 text-sm leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
                    {step.desc[locale]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DELIVERABLES + IDEAL FOR ══════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto border-t border-[#0D0D0D]/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-6">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: service.color === "#F2F0EB" ? "#0D0D0D" : service.color }}
              >
                {"// "}{L.deliverables}
              </p>
              <ul className="flex flex-col">
                {service.deliverables[locale].map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-5 py-5 border-t border-[#0D0D0D]/10 last:border-b"
                  >
                    <span className="font-mono text-[10px] text-[#0D0D0D]/30 tracking-widest mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span
                      className="font-archivo text-[#0D0D0D] text-lg md:text-xl"
                      style={{ letterSpacing: "-0.02em", lineHeight: 1.3 }}
                    >
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <ScrollReveal delay={0.1}>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: service.color === "#F2F0EB" ? "#0D0D0D" : service.color }}
              >
                {"// "}{L.idealFor}
              </p>
              <p
                className="font-archivo font-black text-[#0D0D0D]"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                {service.idealFor[locale]}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 mt-10 font-archivo font-semibold text-sm bg-[#0D0D0D] text-cream px-5 py-3 hover:bg-accent transition-colors duration-200"
                style={{ letterSpacing: "-0.02em" }}
              >
                {L.cta} →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ NEXT SERVICE ══════════════════════════════════════════ */}
      {nextService && (
        <div className="bg-cream text-[#0D0D0D] border-t border-[#0D0D0D]/10">
          <Link
            href={`/${locale}/services/${nextService.slug}`}
            className="block px-6 md:px-8 lg:px-12 py-20 md:py-24 max-w-[1920px] mx-auto group"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <p className="font-mono text-[10px] text-[#0D0D0D]/40 tracking-widest uppercase mb-5">
                  {L.next} →
                </p>
                <h3
                  className="font-archivo font-black text-[#0D0D0D]/40 group-hover:text-[#0D0D0D] transition-colors duration-500"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.92 }}
                >
                  {nextService.name[locale]}
                </h3>
                <p className="font-mono text-[10px] text-[#0D0D0D]/40 mt-4 tracking-widest uppercase">
                  {nextService.tags.join(" · ")}
                </p>
              </div>
              <motion.span
                className="font-archivo font-black text-[#0D0D0D]/20 group-hover:text-[#0D0D0D] transition-colors duration-300 shrink-0"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                whileHover={{ x: 10, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                ↗
              </motion.span>
            </div>
          </Link>
        </div>
      )}

      <ContactCTA />
    </div>
  );
}
