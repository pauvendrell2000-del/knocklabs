"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function AboutTeaser() {
  const t = useTranslations("about");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <section className="border-t border-dark02 py-24 md:py-32 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Text — 6 cols */}
        <div className="md:col-span-6">
          <ScrollReveal>
            <p className="section-label mb-8">{t("label")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              className="font-archivo font-black text-cream mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", lineHeight: 0.95 }}
            >
              {t("title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p
              className="font-archivo text-cream/40 text-base leading-relaxed mb-10 max-w-md"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t("body")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <Link
              href={lp("/about")}
              className="nav-underline font-archivo font-semibold text-sm text-accent pb-1"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("cta")}
            </Link>
          </ScrollReveal>
        </div>

        {/* Visual — offset 1, 5 cols */}
        <div className="md:col-span-5 md:col-start-8">
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative aspect-square border border-dark02">
              {/* Inner border */}
              <div className="absolute inset-6 border border-dark02 opacity-50" />

              {/* Big KL */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="font-archivo font-black select-none text-dark02"
                  style={{ fontSize: "clamp(6rem, 16vw, 14rem)", letterSpacing: "-0.06em", lineHeight: 1 }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  KL
                </motion.span>
              </div>

              {/* Location tag */}
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-[10px] text-cream/20 tracking-widest uppercase">Madrid, Spain</p>
              </div>

              {/* Pulse dot */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <span className="font-mono text-[9px] text-cream/20 tracking-widest uppercase">Live</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
