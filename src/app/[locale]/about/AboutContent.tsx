"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactCTA from "@/components/sections/ContactCTA";

type Value = { num: string; title: string; desc: string };

export default function AboutPage() {
  const t = useTranslations("about");
  const tx = useTranslations("about_extended");
  const values = tx.raw("values") as Value[];

  return (
    <div>
      {/* Hero — dark */}
      <div className="pt-40 pb-24 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        <ScrollReveal>
          <p className="section-label mb-6">{t("label")}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1
            className="font-archivo font-black text-cream"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.035em" }}
          >
            {t("line1")}<br />{t("line2")}<br />{t("line3")}
          </h1>
        </ScrollReveal>
      </div>

      {/* Manifesto — light */}
      <div className="bg-cream py-24 md:py-32 px-6 md:px-8 lg:px-12">
        <div className="max-w-[1920px] mx-auto max-w-3xl">
          <ScrollReveal>
            <p
              className="font-archivo font-black text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              {t("body")}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Values — dark */}
      <div className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto">
        <ScrollReveal>
          <p className="section-label mb-14">{t("values_label")}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark02">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="bg-base p-10 md:p-12"
                whileHover={{ backgroundColor: "#1A1A1A" }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-mono text-xs text-accent tracking-widest block mb-6">{v.num}</span>
                <h3
                  className="font-archivo font-black text-cream mb-4"
                  style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)", letterSpacing: "-0.03em" }}
                >
                  {v.title}
                </h3>
                <p className="font-archivo text-cream/40 text-sm leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
                  {v.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
