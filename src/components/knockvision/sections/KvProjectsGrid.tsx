"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  kvCategories,
  kvProjects,
  type KvCategory,
} from "@/data/knockvision-projects";
import KvImage from "@/components/knockvision/ui/KvImage";

export default function KvProjectsGrid({ initialCategory }: { initialCategory?: KvCategory }) {
  const locale = useLocale() as "es" | "en";
  const t = useTranslations("knockvision.projectsPage");
  const [active, setActive] = useState<KvCategory | "all">(initialCategory ?? "all");

  const visible = useMemo(() => {
    let projects = active === "all" ? kvProjects : kvProjects.filter((p) => p.category === active);
    const heroIdx = projects.findIndex((p) => p.slug === "villa-xero");
    if (heroIdx > 0) {
      projects = [projects[heroIdx], ...projects.slice(0, heroIdx), ...projects.slice(heroIdx + 1)];
    }
    return projects;
  }, [active]);

  return (
    <section className="bg-cream text-[#1A1A1A]">

      {/* Filter bar */}
      <div className="px-6 md:px-8 lg:px-12 py-10 md:py-12 border-t border-[#1A1A1A]/[0.09]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 mr-1">
            {t("filterBy")}
          </span>
          <FilterBtn label={t("all")} active={active === "all"} onClick={() => setActive("all")} />
          {kvCategories.map((c) => (
            <FilterBtn
              key={c.id}
              label={c.label[locale]}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Grid — edge to edge, no side padding */}
      <div className="pb-28 md:pb-52">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/40"
          >
            {visible.map((p, i) => {
              const isHero = i === 0;
              const ratio = isHero ? "16/9" : "3/4";

              return (
                <Link
                  key={p.slug}
                  href={`/${locale}/knockvision/proyectos/${p.slug}`}
                  className={`group relative block overflow-hidden bg-[#D8D3C8] ${isHero ? "md:col-span-2" : ""}`}
                >
                  {/* Image */}
                  <KvImage
                    image={{ ...p.cover, ratio }}
                    sizes={isHero ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Title — appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none">
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/50 mb-2">
                      {p.num}
                    </p>
                    <p
                      className="font-archivo font-black text-white leading-none tracking-tight"
                      style={{ fontSize: isHero ? "clamp(2rem, 4vw, 4rem)" : "clamp(1.4rem, 2.5vw, 2.5rem)" }}
                    >
                      {p.title[locale]}
                    </p>
                  </div>

                  {/* Always-visible number chip (top-right, subtle) */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 py-20 text-center">
            {t("empty")}
          </p>
        )}
      </div>
    </section>
  );
}

function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative font-mono text-[10px] tracking-[0.18em] uppercase pb-1 transition-colors duration-200 ${
        active ? "text-kv-accent" : "text-[#1A1A1A]/30 hover:text-[#1A1A1A]/70"
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="kv-filter-line"
          className="absolute bottom-0 left-0 w-full h-px bg-kv-accent"
          transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
        />
      )}
    </button>
  );
}
