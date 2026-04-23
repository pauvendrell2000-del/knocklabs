"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessItem {
  num: string;
  title: string;
  desc: string;
}

export default function Process() {
  const t = useTranslations("process");
  const items = t.raw("items") as ProcessItem[];

  return (
    <section className="bg-cream pt-20 md:pt-28 pb-24 md:pb-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <ScrollReveal>
            <p className="section-label mb-4">{t("label")}</p>
            <h2
              className="font-archivo font-black text-[#0D0D0D]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.035em", lineHeight: 0.92 }}
            >
              {t("title")}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#0D0D0D]/10">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                className="bg-cream p-8 md:p-10 flex flex-col gap-6 min-h-[240px]"
                whileHover={{ backgroundColor: "#e8e6e1" }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-mono text-xs text-accent tracking-widest">{item.num}</span>
                <div className="mt-auto">
                  <h3
                    className="font-archivo font-black text-[#0D0D0D] mb-3"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-archivo text-[#0D0D0D]/50 text-sm leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
