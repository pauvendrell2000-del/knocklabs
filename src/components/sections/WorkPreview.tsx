"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

export default function WorkPreview() {
  const t = useTranslations("work");
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "en" ? "en" : "es") as "es" | "en";
  const lp = (path: string) => `/${locale}${path}`;

  const featured = projects.filter(p => !p.hidden).slice(0, 3);

  return (
    <section className="border-t border-dark02 py-24 md:py-32 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
        <div>
          <ScrollReveal>
            <p className="section-label mb-4">{t("label")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-archivo font-black text-cream"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", lineHeight: 0.95 }}
            >
              {t("title")}
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.15}>
          <Link
            href={lp("/work")}
            className="nav-underline font-archivo text-sm text-cream/40 hover:text-cream transition-colors duration-200 pb-1"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("cta")}
          </Link>
        </ScrollReveal>
      </div>

      <div className="flex flex-col border-t border-dark02">
        {featured.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.07}>
            <Link href={lp(`/work/${project.slug}`)}>
              <motion.div
                className="border-b border-dark02 flex items-center justify-between py-7 md:py-9 group cursor-pointer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-mono text-[10px] text-cream/20 w-6">{project.num}</span>
                  <div>
                    <h3
                      className="font-archivo font-black text-cream group-hover:text-accent transition-colors duration-300"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      {project.name[locale]}
                    </h3>
                    <p className="font-mono text-[11px] text-cream/30 tracking-wide mt-1.5">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                  <div className="hidden md:flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] text-cream/25 border border-cream/[0.08] px-2.5 py-1 tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-cream/25">{project.year}</span>
                  <span className="text-cream/15 text-lg group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    ↗
                  </span>
                </div>
              </motion.div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
