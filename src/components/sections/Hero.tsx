"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AsciiHeroBackground from "@/components/ui/AsciiHeroBackground";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AsciiHeroBackground />
      <div className="relative z-10 max-w-[1920px] mx-auto min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-8 lg:px-12">
      {/* Label */}
      <div className="overflow-hidden mb-8 pt-32">
        <motion.p
          className="section-label"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
        >
          {t("label")}
        </motion.p>
      </div>

      {/* Headline — 4 lines */}
      <div className="mb-12 md:mb-16">
        {([t("line1"), t("line2"), t("line3"), t("line4")] as string[]).map((line, i) => (
          <RevealLine key={i} delay={0.3 + i * 0.08}>
            <h1
              className="font-archivo font-black text-cream block leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", letterSpacing: "-0.035em" }}
            >
              {line}
            </h1>
          </RevealLine>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-dark02 pt-8">
        <motion.p
          className="font-archivo text-cream/50 text-base md:text-lg max-w-sm leading-relaxed"
          style={{ letterSpacing: "-0.01em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
        >
          {t("sub")}
        </motion.p>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
        >
          <Link
            href={lp("/contact")}
            className="font-archivo font-semibold text-sm bg-accent text-cream px-5 py-3 hover:bg-cream hover:text-base transition-colors duration-200"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("cta1")}
          </Link>
          <Link
            href={lp("/work")}
            className="font-archivo font-medium text-sm text-cream/50 hover:text-cream transition-colors duration-200 border border-cream/15 px-5 py-3 hover:border-cream/40"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("cta2")}
          </Link>
        </motion.div>
      </div>

        <motion.span
          className="absolute top-8 right-6 md:right-12 font-mono text-[10px] text-cream/20 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          01/05
        </motion.span>
      </div>
    </section>
  );
}
