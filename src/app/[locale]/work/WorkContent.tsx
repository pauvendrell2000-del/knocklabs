"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

// Grid layout: alternating wide/narrow for visual rhythm
const layout = [
  { cols: "md:col-span-7", rows: "h-[62vh]" },
  { cols: "md:col-span-5", rows: "h-[62vh]" },
  { cols: "md:col-span-5", rows: "h-[62vh]" },
  { cols: "md:col-span-7", rows: "h-[62vh]" },
  { cols: "md:col-span-12", rows: "h-[55vh]" },
];


function ProjectCard({
  project,
  locale,
  index,
}: {
  project: (typeof projects)[0];
  locale: "es" | "en";
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/${locale}/work/${project.slug}`}>
      <motion.div
        className={`relative overflow-hidden cursor-pointer ${layout[index].rows} bg-dark01 group`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
        viewport={{ once: true }}
      >
        {/* Color fill on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 100%)` }}
        />

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 border"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ borderColor: project.color }}
        />


        {/* Giant background number */}
        <span
          className="absolute -bottom-4 -left-3 font-archivo font-black pointer-events-none select-none transition-opacity duration-500"
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)",
            lineHeight: 1,
            color: project.color,
            opacity: hovered ? 0.06 : 0.03,
            letterSpacing: "-0.06em",
          }}
        >
          {project.num}
        </span>

        {/* Bottom content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
          {/* Tags top-left */}
          <div className="absolute top-7 left-7 md:top-10 md:left-10 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border transition-colors duration-300"
                style={{
                  borderColor: hovered ? project.color : "rgba(242,240,235,0.08)",
                  color: hovered ? project.color : "rgba(242,240,235,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year top-right */}
          <span className="absolute top-7 right-7 md:top-10 md:right-10 font-mono text-[10px] text-cream/20 tracking-widest">
            {project.year}
          </span>

          {/* Main info */}
          <div className="flex flex-col gap-1 mb-4">
            <p className="font-mono text-[10px] text-cream/30 tracking-widest uppercase">
              {project.client}
            </p>
            <h2
              className="font-archivo font-black text-cream transition-colors duration-300"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: hovered ? "#FFFFFF" : "rgba(242,240,235,0.85)",
              }}
            >
              {project.name[locale]}
            </h2>
          </div>

          {/* CTA */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex items-center gap-2 w-fit"
              >
                <span
                  className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5"
                  style={{ background: project.color, color: "#F2F0EB" }}
                >
                  {locale === "es" ? "Ver proyecto" : "View project"} ↗
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Link>
  );
}

export default function WorkContent() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "en" ? "en" : "es") as "es" | "en";

  const titleEs = (
    <>
      Trabajo<br />
      <span className="text-cream/20">seleccionado.</span>
    </>
  );
  const titleEn = (
    <>
      Selected<br />
      <span className="text-cream/20">work.</span>
    </>
  );

  return (
    <div>
      {/* Header */}
      <div className="pt-36 pb-16 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {locale === "es" ? "// Proyectos" : "// Projects"}
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h1
            className="font-archivo font-black text-cream"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.035em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          >
            {locale === "es" ? titleEs : titleEn}
          </motion.h1>
          <motion.div
            className="flex gap-8 pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { v: "05", l: locale === "es" ? "Proyectos" : "Projects" },
              { v: "2026", l: locale === "es" ? "Período" : "Period" },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="font-archivo font-black text-cream text-2xl" style={{ letterSpacing: "-0.04em" }}>{v}</p>
                <p className="font-mono text-[10px] text-cream/25 tracking-widest uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-8 lg:px-12 pb-24 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {projects.filter(p => !p.hidden).map((project, i) => (
            <div key={project.slug} className={`col-span-12 ${layout[i].cols}`}>
              <ProjectCard project={project} locale={locale} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
