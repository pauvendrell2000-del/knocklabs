"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const copy = {
  es: {
    label: "// Knockvision",
    title: "Un departamento visual.",
    sub: "Render arquitectónico, producto y campañas 3D.",
    cta: "Explorar Knockvision ↗",
  },
  en: {
    label: "// Knockvision",
    title: "A visual department.",
    sub: "Architectural rendering, product and 3D campaigns.",
    cta: "Explore Knockvision ↗",
  },
};

export default function KvTeaser() {
  const locale = useLocale() as "es" | "en";
  const t = copy[locale] ?? copy.es;

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90svh" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/knockvision/proyectos/resort-aegeo/06.webp"
          alt="Knockvision — Resort Aegeo render"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.45) 40%, rgba(10,8,6,0.88) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32" style={{ minHeight: "90svh" }}>
        {/* Top label */}
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40">
          {t.label}
        </p>

        {/* Bottom block */}
        <div>
          <h2
            className="font-archivo font-black text-white leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)", letterSpacing: "-0.05em" }}
          >
            {t.title}
          </h2>
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p
              className="font-archivo text-white/55 max-w-md"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)", letterSpacing: "-0.01em", lineHeight: 1.5 }}
            >
              {t.sub}
            </p>
            <Link
              href={`/${locale}/knockvision`}
              className="inline-flex items-center font-mono text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/60 px-5 py-3 transition-colors duration-300 whitespace-nowrap"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
