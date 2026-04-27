"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/data/projects";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

type Props = { project: Project; locale: "es" | "en"; nextProject?: Project };

function ImageSlot({ folder, file, alt }: { folder?: string; file: string; alt: string }) {
  const src = folder ? `/images/projects/${folder}/${file}` : "";
  return src ? (
    <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 1280px, 100vw" className="object-contain" />
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0D0D0D]/5">
      <p className="font-mono text-xs text-[#0D0D0D]/30 tracking-widest">imagen pendiente</p>
      <p className="font-mono text-[11px] text-[#0D0D0D] font-bold tracking-wider">{file}</p>
    </div>
  );
}

export default function ProjectDetail({ project, locale, nextProject }: Props) {
  const shouldReduce = useReducedMotion();

  const L = {
    es: {
      client: "Cliente",
      year: "Año",
      services: "Servicios",
      duration: "Duración",
      challenge: "El reto",
      solution: "La solución",
      results: "Resultados",
      next: "Siguiente proyecto",
      back: "← Volver",
      project: "Proyecto",
      overview: "Overview",
    },
    en: {
      client: "Client",
      year: "Year",
      services: "Services",
      duration: "Duration",
      challenge: "The challenge",
      solution: "The solution",
      results: "Results",
      next: "Next project",
      back: "← Back",
      project: "Project",
      overview: "Overview",
    },
  }[locale];

  const meta = [
    { label: L.services, value: project.services[locale].join(" · ") },
    { label: L.duration, value: project.duration[locale] },
    { label: L.year, value: project.year },
    { label: L.client, value: project.client },
  ];

  return (
    <div className="bg-cream text-[#0D0D0D]">
      {/* ══ 1. HERO — cream bg ══════════════════════════════════ */}
      <section className="pt-36 pb-16 md:pb-24 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between mb-14">
          <ScrollReveal>
            <Link
              href={`/${locale}/work`}
              className="font-mono text-[10px] text-[#0D0D0D]/40 hover:text-[#0D0D0D] transition-colors tracking-widest uppercase"
            >
              {L.back}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="font-mono text-[10px] text-[#0D0D0D]/30 tracking-widest uppercase">
              {project.num} / 05 — {L.project}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* Left — big client */}
          <div className="md:col-span-7 flex flex-col justify-between gap-10">
            <ScrollReveal delay={0.08}>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: project.color }}
              >
                {"// "}{project.tags.join(" · ")}
              </p>
              <h1
                className="font-archivo font-black text-[#0D0D0D]"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 9rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                }}
              >
                {project.client}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="font-archivo text-[#0D0D0D]/60 text-lg md:text-xl"
                style={{ letterSpacing: "-0.015em", maxWidth: "46ch", lineHeight: 1.4 }}
              >
                {project.name[locale]}.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — metadata */}
          <div className="md:col-span-5 md:pl-12 md:border-l border-[#0D0D0D]/10 flex flex-col justify-end">
            <ScrollReveal delay={0.28}>
              <div>
                {meta.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex items-start justify-between gap-4 py-4 border-b border-[#0D0D0D]/10 ${
                      i === 0 ? "border-t" : ""
                    }`}
                  >
                    <p className="font-mono text-[10px] text-[#0D0D0D]/40 tracking-widest uppercase shrink-0">
                      {label}
                    </p>
                    <p
                      className="font-archivo text-[#0D0D0D] text-sm text-right"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 2. FEATURED DISPLAY ═══════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto pb-16 md:pb-24">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/8", backgroundColor: project.color }}
          initial={shouldReduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <ImageSlot
            folder={project.imageFolder}
            file="hero.png"
            alt={`${project.client} — hero`}
          />
        </motion.div>
      </section>

      {/* ══ 3. THE CHALLENGE — cream bg ═══════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto border-t border-[#0D0D0D]/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: project.color }}
              >
                {"// "}{L.challenge}
              </p>
              <h2
                className="font-archivo font-black text-[#0D0D0D]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {project.name[locale]}.
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 md:col-start-6 flex flex-col">
            <ScrollReveal delay={0.1}>
              <div className="h-px w-full bg-[#0D0D0D]/10 mb-10" />
              <p
                className="font-archivo text-[#0D0D0D]/70 text-lg md:text-xl leading-relaxed"
                style={{ letterSpacing: "-0.015em", maxWidth: "58ch" }}
              >
                {project.challenge[locale]}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 4. IMAGE GALLERY ══════════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 pb-16 md:pb-24 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE8E0]">
              <ImageSlot
                folder={project.imageFolder}
                file="imagen1.png"
                alt={`${project.client} — imagen 1`}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE8E0]">
              <ImageSlot
                folder={project.imageFolder}
                file="imagen2.png"
                alt={`${project.client} — imagen 2`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 5. THE SOLUTION ════════════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto border-t border-[#0D0D0D]/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: project.color }}
              >
                {"// "}{L.solution}
              </p>
              <h2
                className="font-archivo font-black text-[#0D0D0D]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {locale === "es" ? "Cómo lo resolvimos." : "How we solved it."}
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 md:col-start-6 flex flex-col">
            <ScrollReveal delay={0.1}>
              <div className="h-px w-full bg-[#0D0D0D]/10 mb-10" />
              <p
                className="font-archivo text-[#0D0D0D]/70 text-lg md:text-xl leading-relaxed"
                style={{ letterSpacing: "-0.015em", maxWidth: "58ch" }}
              >
                {project.solution[locale]}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 6. FULL-WIDTH IMAGE ═══════════════════════════════════ */}
      <section className="px-6 md:px-8 lg:px-12 pb-16 md:pb-24 max-w-[1920px] mx-auto">
        <ScrollReveal>
          <div className="relative w-full overflow-hidden bg-[#EBE8E0]" style={{ aspectRatio: "21/10" }}>
            <ImageSlot
              folder={project.imageFolder}
              file="portada.png"
              alt={`${project.client} — portada`}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ══ 7. RESULTS — dark contrast ═════════════════════════════ */}
      <section className="bg-[#0D0D0D] text-cream">
        <div className="px-6 md:px-8 lg:px-12 pt-24 md:pt-32 max-w-[1920px] mx-auto">
          <div className="flex items-end justify-between mb-14 md:mb-16">
            <ScrollReveal>
              <p
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: project.color }}
              >
                {"// "}{L.results}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="font-mono text-[10px] text-cream/30 tracking-widest uppercase">
                {project.results.length} KPIs
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 mx-[-1.5rem] md:mx-[-2rem] lg:mx-[-3rem]">
            {project.results.map((result, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-[#0D0D0D] px-8 md:px-14 py-14 md:py-16 flex flex-col gap-5 h-full"
                  whileHover={shouldReduce ? {} : { backgroundColor: "#141414" }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-mono text-[10px] text-cream/30 tracking-widest uppercase">
                    0{i + 1}
                  </p>
                  <span
                    className="font-archivo font-black"
                    style={{
                      fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                      color: project.color,
                      letterSpacing: "-0.045em",
                      lineHeight: 0.9,
                    }}
                  >
                    {result.value}
                  </span>
                  <div className="h-px w-10" style={{ backgroundColor: project.color }} />
                  <p className="font-archivo text-cream/60 text-sm" style={{ letterSpacing: "-0.01em" }}>
                    {result.label[locale]}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-16 md:pt-20" />
        </div>
      </section>

      {/* ══ 8. NEXT PROJECT ═══════════════════════════════════════ */}
      {nextProject && (
        <div className="bg-cream text-[#0D0D0D]">
          <Link
            href={`/${locale}/work/${nextProject.slug}`}
            className="block px-6 md:px-8 lg:px-12 py-20 md:py-24 max-w-[1920px] mx-auto group"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <p className="font-mono text-[10px] text-[#0D0D0D]/40 tracking-widest uppercase mb-5">
                  {L.next} →
                </p>
                <h3
                  className="font-archivo font-black text-[#0D0D0D]/40 group-hover:text-[#0D0D0D] transition-colors duration-500"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 6rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.92,
                  }}
                >
                  {nextProject.client}
                </h3>
                <p className="font-mono text-[10px] text-[#0D0D0D]/40 mt-4 tracking-widest uppercase">
                  {nextProject.name[locale]}
                </p>
              </div>
              <motion.span
                className="font-archivo font-black text-[#0D0D0D]/20 group-hover:text-[#0D0D0D] transition-colors duration-300 shrink-0"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: "",
                }}
                whileHover={{ x: 10, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                ↗
              </motion.span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
