"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

const copy = {
  es: {
    statusLabel: "// estado",
    headline: "En construcción.",
    completed: "completado",
    tagline: "Estamos construyendo algo que merece ser visto.",
    contactLabel: "// contacto",
    footer: "Construimos marcas que merecen ser vistas.",
  },
  en: {
    statusLabel: "// status",
    headline: "Under construction.",
    completed: "completed",
    tagline: "We're building something worth seeing.",
    contactLabel: "// contact",
    footer: "We build brands that deserve to be seen.",
  },
};

const SCRAMBLE_POOL = "abcdefghijklmnopqrstuvwxyz";
const ASCII_PALETTE = "   ·:░▒▓";
const TARGET_COUNTER = 73;

export default function UnderConstruction() {
  const locale = useLocale() as "es" | "en";
  const t = copy[locale] ?? copy.es;

  const [scrambled, setScrambled] = useState(t.headline);
  const [counter, setCounter] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const asciiRef = useRef<HTMLDivElement>(null);

  // Flowing ASCII background field
  useEffect(() => {
    const el = asciiRef.current;
    if (!el) return;

    const cols = 170;
    const rows = 90;
    const cx = cols / 2;
    const cy = rows / 2;
    let frame = 0;
    let last = 0;
    let raf = 0;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      // throttle to ~13fps for a calm, refined drift
      if (now - last < 75) return;
      last = now;
      frame++;
      const time = frame * 0.055;
      let out = "";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const v =
            Math.sin(x * 0.13 + time) +
            Math.sin(y * 0.17 - time * 0.55) +
            Math.sin((x + y) * 0.07 + time * 0.4) +
            Math.sin(Math.hypot(x - cx, y - cy) * 0.11 - time * 0.8);
          let idx = Math.round(((v + 4) / 8) * (ASCII_PALETTE.length - 1));
          if (idx < 0) idx = 0;
          else if (idx >= ASCII_PALETTE.length) idx = ASCII_PALETTE.length - 1;
          out += ASCII_PALETTE[idx];
        }
        out += "\n";
      }
      el.textContent = out;
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Headline scramble reveal
  useEffect(() => {
    const text = t.headline;
    setScrambled(text);
    setCursorVisible(true);

    let frame = 0;
    const total = 52;
    // Only the few characters just ahead of the reveal frontier flicker,
    // and they refresh every other frame — a calmer, more deliberate reveal.
    const window = 5;
    let interval: ReturnType<typeof setInterval>;
    let hideCursor: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        frame++;
        const revealed = Math.floor((frame / total) * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed || text[i] === " " || text[i] === ".") {
            s += text[i];
          } else if (i < revealed + window) {
            // hold each scramble char for two frames so it reads, not flickers
            const seed = i + (frame >> 1);
            s += SCRAMBLE_POOL[seed % SCRAMBLE_POOL.length];
          } else {
            s += " ";
          }
        }
        setScrambled(s);
        if (frame >= total) {
          clearInterval(interval);
          setScrambled(text);
          hideCursor = setTimeout(() => setCursorVisible(false), 2000);
        }
      }, 38);
    }, 380);

    return () => {
      clearTimeout(start);
      clearTimeout(hideCursor);
      clearInterval(interval);
    };
  }, [t.headline]);

  // Counter 0 → 73
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      let cnt = 0;
      interval = setInterval(() => {
        cnt++;
        setCounter(cnt);
        if (cnt >= TARGET_COUNTER) clearInterval(interval);
      }, 26);
    }, 950);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="uc-root">
      {/* ASCII texture background */}
      <div ref={asciiRef} className="uc-ascii" aria-hidden="true" />

      {/* CRT scan line */}
      <div className="uc-scan" aria-hidden="true" />

      {/* Header */}
      <header className="uc-header">
        <span className="uc-wordmark">
          KNOCK<span className="uc-wordmark-dot"> LABS</span>
        </span>
        <span className="uc-meta">Barcelona · 2025</span>
      </header>

      <div className="uc-divider" />

      {/* Main */}
      <main className="uc-main">
        <div className="uc-inner">
          <div className="uc-status">{t.statusLabel}</div>

          <div className="uc-headline-wrap">
            <h1 className="uc-headline">
              {scrambled}
              <span
                className="uc-cursor"
                style={{ opacity: cursorVisible ? 1 : 0 }}
              />
            </h1>
          </div>

          <div className="uc-progress">
            <div className="uc-progress-top">
              <span className="uc-progress-label">{t.completed}</span>
              <span className="uc-progress-pct">
                {String(counter).padStart(2, "0")}%
              </span>
            </div>
            <div className="uc-progress-track">
              <div className="uc-progress-bar" />
            </div>
          </div>

          <p className="uc-tagline">{t.tagline}</p>

          <div className="uc-contact">
            <div className="uc-contact-label">{t.contactLabel}</div>
            <a href="mailto:hola@knocklabs.es" className="uc-contact-link">
              hola@knocklabs.es<span className="uc-arrow">→</span>
            </a>
          </div>
        </div>
      </main>

      <div className="uc-divider" />

      {/* Footer */}
      <footer className="uc-footer">
        <span className="uc-footer-text">{t.footer}</span>
        <span className="uc-footer-dashes" aria-hidden="true">
          ──────────────────────────
        </span>
      </footer>

      <style jsx>{`
        .uc-root {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0d0d0d;
          position: relative;
          overflow: hidden;
        }
        .uc-ascii {
          position: absolute;
          inset: 0;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          line-height: 1.3;
          color: #f2f0eb;
          opacity: 0.11;
          letter-spacing: 0.08em;
          white-space: pre;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }
        .uc-scan {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(242, 240, 235, 0.06);
          z-index: 1;
          pointer-events: none;
          top: -1px;
          animation: uc-scan-move 14s linear infinite 1.5s;
        }
        .uc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px clamp(24px, 4vw, 48px);
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          animation: uc-fade 600ms 100ms both;
        }
        .uc-wordmark {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 900;
          font-size: 0.95rem;
          letter-spacing: -0.02em;
          color: #f2f0eb;
        }
        .uc-wordmark-dot {
          color: var(--accent, #ff4c00);
        }
        .uc-meta {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(242, 240, 235, 0.3);
        }
        .uc-divider {
          height: 1px;
          background: #2a2a2a;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .uc-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 clamp(24px, 4vw, 48px);
          position: relative;
          z-index: 2;
          min-height: 0;
        }
        .uc-inner {
          max-width: 1100px;
          width: 100%;
        }
        .uc-status {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(242, 240, 235, 0.32);
          margin-bottom: 36px;
          animation: uc-up 600ms 320ms both cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .uc-headline-wrap {
          overflow: hidden;
          margin-bottom: 36px;
          animation: uc-up 1000ms 180ms both cubic-bezier(0.65, 0, 0.35, 1);
        }
        .uc-headline {
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(3.5rem, 11vw, 9rem);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.04em;
          color: #f2f0eb;
          overflow-wrap: break-word;
          margin: 0;
        }
        .uc-cursor {
          display: inline-block;
          width: 0.08em;
          height: 0.85em;
          background: var(--accent, #ff4c00);
          vertical-align: baseline;
          margin-left: 0.06em;
          animation: uc-blink 900ms step-start infinite;
        }
        .uc-progress {
          margin-bottom: 36px;
          animation: uc-fade 600ms 520ms both;
        }
        .uc-progress-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          max-width: 460px;
        }
        .uc-progress-label {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(242, 240, 235, 0.28);
        }
        .uc-progress-pct {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.06em;
          color: var(--accent, #ff4c00);
        }
        .uc-progress-track {
          height: 1px;
          background: #2a2a2a;
          max-width: 460px;
        }
        .uc-progress-bar {
          height: 1px;
          background: var(--accent, #ff4c00);
          width: 0;
          animation: uc-progress 2.4s 1.1s both cubic-bezier(0.65, 0, 0.35, 1);
        }
        .uc-tagline {
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.45;
          letter-spacing: -0.015em;
          color: rgba(242, 240, 235, 0.42);
          max-width: 380px;
          margin: 0 0 44px;
          animation: uc-up 700ms 620ms both cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .uc-contact {
          animation: uc-up 700ms 760ms both cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .uc-contact-label {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(242, 240, 235, 0.28);
          margin-bottom: 14px;
        }
        .uc-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          color: #f2f0eb;
          text-decoration: none;
          transition: color 200ms cubic-bezier(0.65, 0, 0.35, 1);
        }
        .uc-contact-link:hover {
          color: var(--accent, #ff4c00);
        }
        .uc-arrow {
          font-weight: 400;
          font-size: 0.7em;
          color: var(--accent, #ff4c00);
        }
        .uc-footer {
          padding: 20px clamp(24px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          animation: uc-fade 600ms 900ms both;
        }
        .uc-footer-text {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242, 240, 235, 0.18);
        }
        .uc-footer-dashes {
          font-family: var(--font-dm-mono), monospace;
          font-size: 0.58rem;
          color: rgba(242, 240, 235, 0.1);
          user-select: none;
          letter-spacing: 0.04em;
        }

        @keyframes uc-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes uc-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes uc-scan-move {
          0% {
            top: -1px;
            opacity: 0;
          }
          4% {
            opacity: 1;
          }
          96% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes uc-progress {
          from {
            width: 0;
          }
          to {
            width: 73%;
          }
        }
        @keyframes uc-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 600px) {
          .uc-footer-dashes {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
