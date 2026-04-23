"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

type Section = { title: string; content: string };

type Props = {
  label: string;
  title: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalPage({ label, title, lastUpdated, sections }: Props) {
  return (
    <div className="pt-40 pb-24 px-6 md:px-8 lg:px-12 max-w-[900px] mx-auto">
      <ScrollReveal>
        <p className="section-label mb-6">{label}</p>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <h1
          className="font-archivo font-black text-cream mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.95 }}
        >
          {title}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <p className="font-mono text-[11px] text-cream/25 tracking-widest uppercase mb-16">{lastUpdated}</p>
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        {sections.map((section, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <div className="border-t border-dark02 pt-8">
              <h2
                className="font-archivo font-black text-cream mb-4"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em" }}
              >
                {section.title}
              </h2>
              <p
                className="font-archivo text-cream/50 text-sm leading-relaxed whitespace-pre-line"
                style={{ letterSpacing: "-0.005em" }}
              >
                {section.content}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
