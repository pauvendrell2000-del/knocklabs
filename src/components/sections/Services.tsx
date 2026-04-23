"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section className="border-t border-dark02 py-24 md:py-32 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
        <ScrollReveal>
          <p className="section-label">{t("label")}</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark02">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <motion.div
              className="relative bg-base p-10 md:p-14 group cursor-pointer h-full flex flex-col gap-6 overflow-hidden"
              whileHover={{ backgroundColor: "#1A1A1A" }}
              transition={{ duration: 0.25 }}
            >
              <pre
                aria-hidden="true"
                className="absolute inset-0 w-full h-full font-mono text-[10px] leading-[1.4] pointer-events-none select-none opacity-[0.05] whitespace-pre overflow-hidden"
                style={{ color: "#FF4C00", letterSpacing: "0.04em" }}
              >{Array.from({ length: 40 }, (_, r) =>
                Array.from({ length: 120 }, (_, c) => "01ABCDEFXYZ*#@!?><{}[]()|\\-_+=/~:;."[(r * 120 + c) % 36]).join("")
              ).join("\n")}</pre>
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-accent/70 tracking-widest">{item.num}</span>
                <motion.span
                  className="text-cream/15 text-xl group-hover:text-accent transition-colors duration-300"
                  animate={{}}
                  whileHover={{ x: 3, y: -3 }}
                >
                  ↗
                </motion.span>
              </div>
              <h3
                className="font-archivo font-black text-cream"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
              >
                {item.title}
              </h3>
              <p className="font-archivo text-sm text-cream/40 leading-relaxed mt-auto" style={{ letterSpacing: "-0.01em" }}>
                {item.desc}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
