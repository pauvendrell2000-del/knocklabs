"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  kvCategories,
  getKvNextProject,
  type KvProject,
} from "@/data/knockvision-projects";
import KvImage from "@/components/knockvision/ui/KvImage";
import KvReveal from "@/components/knockvision/ui/KvReveal";

const EASE_EXPO = [0.19, 1, 0.22, 1] as const;

export default function KvProjectDetail({ project }: { project: KvProject }) {
  const locale = useLocale() as "es" | "en";
  const cat = kvCategories.find((c) => c.id === project.category);
  const next = getKvNextProject(project.slug);

  return (
    <article className="bg-cream text-[#1A1A1A]">

      {/* ── HEADER ── */}
      <header className="pt-36 md:pt-52 pb-12 md:pb-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">

          <motion.div
            className="flex items-baseline justify-between mb-10 md:mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE_EXPO, delay: 0.1 }}
          >
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35">
              {cat?.label[locale]}
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/25">
              {project.num}
            </span>
          </motion.div>

          <motion.h1
            className="font-archivo font-black"
            style={{ fontSize: "clamp(2.75rem, 9.5vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.14 }}
          >
            {project.title[locale]}
          </motion.h1>

        </div>
      </header>

      {/* ── TOP GALLERY ── */}
      {project.topGallery.length > 0 && (
        <KvReveal variant="scale" delay={0} duration={0.85} className="pb-4 md:pb-6">
          <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 grid gap-4 md:gap-5 md:grid-cols-2">
            {project.topGallery.map((img, i) => (
              <KvImage key={i} image={img} sizes="(min-width: 768px) 44vw, 100vw" />
            ))}
          </div>
        </KvReveal>
      )}

      {/* ── HERO FULL-BLEED ── no horizontal padding, edge-to-edge */}
      <KvReveal variant="fade" delay={0} duration={0.7} className="pb-0">
        <div className="w-full">
          <KvImage image={project.hero} priority sizes="100vw" />
        </div>
      </KvReveal>

      {/* ── EDITORIAL BLOCKS ── */}
      {project.blocks.length > 0 && (
        <section className="py-20 md:py-44">
          <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 space-y-0">
            {project.blocks.map((b, i) => (
              <KvReveal key={i} variant="up" delay={0} duration={0.8}>
                <div className="grid gap-8 md:gap-0 md:grid-cols-12 border-t border-[#1A1A1A]/[0.09] py-12 md:py-16">
                  {/* Label col */}
                  <div className="md:col-span-3">
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 mt-1">
                      {b.title[locale]}
                    </p>
                  </div>
                  {/* Body col */}
                  <div className="md:col-span-7 md:col-start-5">
                    <p
                      className="font-archivo text-[#1A1A1A]/75"
                      style={{
                        fontSize: "clamp(1.05rem, 1.5vw, 1.35rem)",
                        lineHeight: 1.5,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {b.body[locale]}
                    </p>
                  </div>
                </div>
              </KvReveal>
            ))}
            {/* Closing border */}
            <div className="border-t border-[#1A1A1A]/[0.09]" />
          </div>
        </section>
      )}

      {/* ── FINAL GALLERY ── */}
      {project.finalGallery.length > 0 && (
        <KvReveal variant="scale" delay={0} duration={0.85} className="pb-16 md:pb-28">
          <div
            className={`max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 grid gap-4 md:gap-5 ${
              project.finalGallery.length === 1 ? "" : "md:grid-cols-2"
            }`}
          >
            {project.finalGallery.map((img, i) => (
              <KvImage
                key={i}
                image={img}
                sizes={project.finalGallery.length === 1 ? "100vw" : "(min-width: 768px) 44vw, 100vw"}
              />
            ))}
          </div>
        </KvReveal>
      )}

      {/* ── CREDITS ── */}
      {project.credits.length > 0 && (
        <KvReveal variant="fade" delay={0} className="border-t border-[#1A1A1A]/[0.09]">
          <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-14">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 mb-8">
              {locale === "es" ? "Créditos" : "Credits"}
            </p>
            <ul className="grid gap-0 md:grid-cols-3">
              {project.credits.map((c, i) => (
                <li key={i} className="flex justify-between gap-8 border-b border-[#1A1A1A]/[0.09] py-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35">
                    {c.role}
                  </span>
                  <span
                    className="font-archivo"
                    style={{ fontSize: "clamp(0.85rem, 0.9vw, 0.95rem)", letterSpacing: "-0.01em" }}
                  >
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </KvReveal>
      )}

      {/* ── NEXT PROJECT ── */}
      {next && (
        <KvReveal variant="up" delay={0} duration={0.9} className="bg-[#151515] text-cream">
          <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-48">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/30 mb-8">
              {locale === "es" ? "Siguiente proyecto" : "Next project"}
            </p>
            <Link
              href={`/${locale}/knockvision/proyectos/${next.slug}`}
              className="group inline-block"
            >
              <span
                className="block font-archivo font-black transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  fontSize: "clamp(2.5rem, 8.5vw, 8rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.05em",
                }}
              >
                {next.title[locale]}
                <span className="inline-block ml-3 transition-transform duration-400 group-hover:translate-x-2">↗</span>
              </span>
            </Link>
          </div>
        </KvReveal>
      )}
    </article>
  );
}
