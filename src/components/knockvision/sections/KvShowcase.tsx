"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { showcaseSlides, type ShowcaseSlide } from "@/data/knockvision-showcase";

// ── Easing ──────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const DURATION = 0.85;
const AUTOPLAY_MS = 6000;

// ── Layout renderers ────────────────────────────────────
function SingleLayout({ slide }: { slide: ShowcaseSlide }) {
  return (
    <div className="absolute inset-0 flex flex-col px-10 md:px-16 lg:px-24 pt-20 pb-0">
      {/* Image — landscape, generous margins, ~75% of height */}
      <div className="flex-1 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={slide.primary.src}
            alt={slide.primary.alt}
            fill
            sizes="90vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function SplitLayout({ slide, flip }: { slide: ShowcaseSlide; flip?: boolean }) {
  const left = flip ? slide.secondary : slide.primary;
  const right = flip ? slide.primary : slide.secondary;
  if (!left || !right) return <SingleLayout slide={slide} />;

  return (
    <div className="absolute inset-0 flex">
      {/* Left — portrait with margin top/bottom */}
      <div className={`w-[48%] flex items-center ${flip ? "justify-end pr-8" : "justify-start pl-10 md:pl-16"}`}>
        <div className="relative w-full max-w-[90%]" style={{ aspectRatio: "3/4" }}>
          <Image
            src={left.src}
            alt={left.alt}
            fill
            sizes="45vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      {/* Right — full-bleed portrait */}
      <div className="flex-1 relative overflow-hidden">
        <Image
          src={right.src}
          alt={right.alt}
          fill
          sizes="52vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

function DarkLayout({ slide }: { slide: ShowcaseSlide }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={slide.primary.src}
        alt={slide.primary.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* Subtle dark vignette at bottom for caption legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

function CenteredLayout({ slide }: { slide: ShowcaseSlide }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-16 py-20">
      <div
        className="relative overflow-hidden"
        style={{ width: "70%", maxWidth: 1000, aspectRatio: "16/9" }}
      >
        <Image
          src={slide.primary.src}
          alt={slide.primary.alt}
          fill
          sizes="70vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}

function SlideLayout({ slide }: { slide: ShowcaseSlide }) {
  switch (slide.layout) {
    case "split":     return <SplitLayout slide={slide} />;
    case "splitFlip": return <SplitLayout slide={slide} flip />;
    case "dark":      return <DarkLayout slide={slide} />;
    case "centered":  return <CenteredLayout slide={slide} />;
    default:          return <SingleLayout slide={slide} />;
  }
}

// ── Caption ─────────────────────────────────────────────
function Caption({
  slide,
  locale,
}: {
  slide: ShowcaseSlide;
  locale: string;
}) {
  const light = slide.textColor === "light";
  const base = light ? "text-white" : "text-[#1A1A1A]";
  const muted = light ? "text-white/50" : "text-[#1A1A1A]/40";

  return (
    <motion.div
      key={slide.slug + "-caption"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1], delay: 0.35 }}
      className="absolute bottom-8 left-10 md:left-16 lg:left-24 flex items-end gap-8"
    >
      <Link
        href={`/${locale}/knockvision/proyectos/${slide.slug}`}
        className="group"
        aria-label={`Ver proyecto ${slide.title}`}
      >
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3
            className={`font-archivo font-black transition-opacity duration-300 group-hover:opacity-50 ${base}`}
            style={{
              fontSize: "clamp(1.15rem, 2vw, 1.85rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {slide.title}
          </h3>
          <span
            className={`font-archivo font-normal ${muted}`}
            style={{ fontSize: "clamp(0.78rem, 0.95vw, 0.9rem)", letterSpacing: "-0.01em" }}
          >
            {slide.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Main component ───────────────────────────────────────
export default function KvShowcase() {
  const locale = useLocale();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const total = showcaseSlides.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = ((next % total) + total) % total;
      setDir(next > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Autoplay — advances every AUTOPLAY_MS; pauses on hover / drag
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, next]);

  const slide = showcaseSlides[index];
  const light = slide.textColor === "light";

  // ── Touch / drag ──
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) { if (delta < 0) { next(); } else { prev(); } }
    dragStartX.current = null;
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 560 }}
      aria-label="Selected Works"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Autoplay progress bar — top edge ── */}
      <style>{`@keyframes kvShowcaseProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      <div
        key={index}
        className="absolute top-0 left-0 right-0 h-[2px] z-30 origin-left"
        style={{
          background: light ? "rgba(255,255,255,0.7)" : "rgba(26,26,26,0.6)",
          transform: "scaleX(0)",
          animation: `kvShowcaseProgress ${AUTOPLAY_MS}ms linear forwards`,
          animationPlayState: paused ? "paused" : "running",
        }}
      />

      {/* ── Animated slide ── */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={slide.slug}
          custom={dir}
          variants={{
            enter: (d: number) => ({ x: `${d * 100}%` }),
            center: { x: "0%" },
            exit: (d: number) => ({ x: `${d * -100}%` }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: DURATION, ease: EASE }}
          className="absolute inset-0"
          style={{ background: slide.bg }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <SlideLayout slide={slide} />
        </motion.div>
      </AnimatePresence>

      {/* ── Caption (separate AnimatePresence for clean fade) ── */}
      <AnimatePresence mode="wait">
        <Caption key={slide.slug} slide={slide} locale={locale} />
      </AnimatePresence>

      {/* ── Next button — circular, right-centre ── */}
      <button
        onClick={next}
        aria-label="Siguiente proyecto"
        className={`absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20
          flex items-center justify-center rounded-full border transition-all duration-300
          ${
            light
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
          }`}
        style={{ width: 48, height: 48 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ── Dots — bottom right ── */}
      <div className="absolute bottom-8 right-10 md:right-16 lg:right-24 flex items-center gap-2 z-20">
        {showcaseSlides.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => goTo(i)}
            aria-label={`Ir a proyecto ${i + 1}: ${s.title}`}
            aria-current={i === index ? "true" : undefined}
            className={`rounded-full transition-all duration-400 ${
              i === index
                ? `w-4 h-1.5 ${light ? "bg-white" : "bg-[#1A1A1A]"}`
                : `w-1.5 h-1.5 ${light ? "bg-white/35" : "bg-[#1A1A1A]/25"}`
            }`}
          />
        ))}
      </div>

      {/* ── Section label — top left, subtle ── */}
      <div
        className={`absolute top-8 left-10 md:left-16 lg:left-24 z-20
          font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-500
          ${light ? "text-white/40" : "text-[#1A1A1A]/30"}`}
      >
        Selected Works
      </div>

      {/* ── Counter — top right area ── */}
      <div
        className={`absolute top-8 right-10 md:right-16 lg:right-24 z-20
          font-mono text-[10px] tracking-[0.14em] transition-colors duration-500
          ${light ? "text-white/35" : "text-[#1A1A1A]/25"}`}
      >
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  );
}
