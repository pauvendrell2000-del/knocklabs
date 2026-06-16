"use client";

import { useTranslations } from "next-intl";
import { kvProjects } from "@/data/knockvision-projects";
import KvReveal from "@/components/knockvision/ui/KvReveal";

export default function KvProjectsHeader() {
  const t = useTranslations("knockvision.projectsPage");

  return (
    <section className="bg-cream text-[#1A1A1A] pt-36 md:pt-52 pb-14 md:pb-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12">
        <KvReveal variant="fade" delay={0.1}>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-10">
            {t("label")}
          </p>
        </KvReveal>
        <KvReveal variant="up" delay={0.15} duration={0.9}>
          <div className="flex items-end justify-between gap-6">
            <h1
              className="font-archivo font-black"
              style={{ fontSize: "clamp(5.5rem, 16vw, 18rem)", lineHeight: 0.85, letterSpacing: "-0.05em" }}
            >
              {t("title")}
            </h1>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 whitespace-nowrap pb-3">
              {String(kvProjects.length).padStart(2, "0")} {t("count")}
            </p>
          </div>
        </KvReveal>
      </div>
    </section>
  );
}
