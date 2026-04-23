"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { services } from "@/data/services";

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export default function ServicesPage() {
  const t = useTranslations("services");
  const ti = useTranslations("services_intro");
  const items = t.raw("items") as ServiceItem[];
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";

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
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.035em" }}
          >
            {t("header1")}<br />{t("header2")}
          </h1>
        </ScrollReveal>
      </div>

      {/* Intro band — light */}
      <div className="bg-cream py-20 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <ScrollReveal>
            <p
              className="font-archivo font-black text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              {ti("title1")}<br />{ti("title2")}<br />{ti("title3")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-archivo text-[#0D0D0D]/50 text-base leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
              {ti("body")}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* 6 pillars grid — dark */}
      <div className="px-6 md:px-8 lg:px-12 py-24 md:py-32 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark02">
          {items.map((item, i) => {
            const slug = services[i]?.slug;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <Link href={slug ? `/${locale}/services/${slug}` : "#"} className="block h-full">
                  <motion.div
                    className="bg-base p-10 md:p-12 flex flex-col gap-6 min-h-[280px] group h-full cursor-pointer"
                    whileHover={{ backgroundColor: "#1A1A1A" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-accent/70 tracking-widest">{item.num}</span>
                      <span className="text-cream/10 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">↗</span>
                    </div>
                    <div className="mt-auto">
                      <h2
                        className="font-archivo font-black text-cream mb-3"
                        style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
                      >
                        {item.title}
                      </h2>
                      <p className="font-archivo text-cream/40 text-sm leading-relaxed mb-5" style={{ letterSpacing: "-0.01em" }}>
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[10px] text-cream/25 border border-cream/[0.08] px-2.5 py-1 tracking-widest uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
