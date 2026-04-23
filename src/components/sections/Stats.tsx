"use client";

import { useTranslations } from "next-intl";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 16 });
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (isInView) motionVal.set(numericValue);
  }, [isInView, motionVal, numericValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export default function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as StatItem[];

  return (
    <section className="bg-cream pt-24 md:pt-32 pb-0 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      <ScrollReveal>
        <p className="section-label mb-16">{t("label")}</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#0D0D0D]/10">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="md:px-10 first:pl-0">
            <div className="flex flex-col gap-3">
              <div
                className="font-archivo font-black text-base"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.035em", lineHeight: 1 }}
              >
                <AnimatedNumber value={item.value} />
                <span className="text-accent">{item.suffix}</span>
              </div>
              <p className="font-mono text-[11px] text-[#0D0D0D]/40 tracking-widest uppercase">
                {item.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
