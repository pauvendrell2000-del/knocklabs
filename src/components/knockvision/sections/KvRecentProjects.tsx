"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { kvProjects } from "@/data/knockvision-projects";
import KvImage from "@/components/knockvision/ui/KvImage";
import KvReveal from "@/components/knockvision/ui/KvReveal";

type SlotLayout = {
  ratio: "16/9" | "3/4" | "4/5";
  wrapClass: string;
};

const SLOTS: SlotLayout[] = [
  { ratio: "16/9", wrapClass: "px-0 md:px-16 lg:px-24" },
  { ratio: "3/4",  wrapClass: "md:w-[42%]" },
  { ratio: "16/9", wrapClass: "px-0 md:pl-0 md:pr-[18%]" },
  { ratio: "4/5",  wrapClass: "md:w-[38%] md:ml-auto" },
];

export default function KvRecentProjects() {
  const locale = useLocale() as "es" | "en";
  const items = kvProjects.slice(0, 4);

  return (
    <section className="bg-cream text-[#1A1A1A]">
      {items.map((p, i) => {
        const slot = SLOTS[i % SLOTS.length];

        return (
          <KvReveal key={p.slug} variant="up" delay={0} duration={0.9}>
            <Link
              href={`/${locale}/knockvision/proyectos/${p.slug}`}
              className="group block py-16 md:py-28 border-t border-[#1A1A1A]/[0.07] first:border-t-0"
            >
              <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16">
                <div className={`overflow-hidden ${slot.wrapClass}`}>
                  <KvImage
                    image={{ ...p.cover, ratio: slot.ratio }}
                    sizes="(min-width: 1024px) 80vw, (min-width: 768px) 90vw, 100vw"
                  />
                </div>
              </div>
            </Link>
          </KvReveal>
        );
      })}

      {/* "Ver todos" row */}
      <div className="border-t border-[#1A1A1A]/[0.07]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <Link
            href={`/${locale}/knockvision/proyectos`}
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 hover:text-kv-accent transition-colors duration-300"
          >
            <span>Ver todos los proyectos</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
