"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const RAMP = ".,:;-~=+*<>?!|/()[]LTJXH#@";

function charAt(d: number): string {
  const i = Math.floor(Math.max(0, Math.min(0.999, d)) * RAMP.length);
  return RAMP[i];
}

function buildStatic(cols: number, rows: number): string {
  const lines: string[] = [];
  for (let r = 0; r < rows; r++) {
    let row = "";
    for (let c = 0; c < cols; c++) {
      const nx = c / cols;
      const ny = r / rows;
      const d = (Math.sin(nx * 9) * 0.5 + 0.5) * 0.32
              + (Math.cos(ny * 7) * 0.5 + 0.5) * 0.28
              + (Math.sin((nx + ny) * 5.5) * 0.5 + 0.5) * 0.22
              + (Math.cos((nx - ny) * 4) * 0.5 + 0.5) * 0.18;
      const ex = Math.abs(nx - 0.5) * 2;
      const ey = Math.abs(ny - 0.5) * 2;
      row += charAt(d * (1 - Math.pow(Math.max(ex, ey), 2.5) * 0.6));
    }
    lines.push(row);
  }
  return lines.join("\n");
}

type Props = {
  color?: string;
  opacity?: number;
};

export default function AsciiBackground({ color = "#FF4C00", opacity = 0.18 }: Props) {
  const ref = useRef<HTMLPreElement>(null);
  const shouldReduce = useReducedMotion();
  const rafId = useRef<number | null>(null);
  const t0 = useRef(0);
  const dims = useRef({ cols: 0, rows: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const CHAR_W = 7.2;
    const CHAR_H = 11;

    const parent = el.parentElement ?? document.documentElement;

    const measure = () => {
      dims.current = {
        cols: Math.ceil(parent.clientWidth / CHAR_W) + 2,
        rows: Math.ceil(parent.clientHeight / CHAR_H) + 2,
      };
    };

    measure();

    if (shouldReduce) {
      const { cols, rows } = dims.current;
      if (cols > 0 && rows > 0) {
        el.textContent = buildStatic(cols, rows);
      }
      return;
    }

    t0.current = performance.now();

    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(parent);

    const tick = () => {
      const t = (performance.now() - t0.current) / 1000;
      const { cols, rows } = dims.current;
      if (cols === 0 || rows === 0) {
        rafId.current = requestAnimationFrame(tick);
        return;
      }

      const lines: string[] = [];
      for (let r = 0; r < rows; r++) {
        let row = "";
        for (let c = 0; c < cols; c++) {
          const nx = c / cols;
          const ny = r / rows;

          const w1 = Math.sin(nx * 9 + t * 0.55) * 0.5 + 0.5;
          const w2 = Math.cos(ny * 7 - t * 0.38) * 0.5 + 0.5;
          const w3 = Math.sin((nx + ny) * 5.5 + t * 0.22) * 0.5 + 0.5;
          const w4 = Math.cos((nx - ny) * 4 - t * 0.18) * 0.5 + 0.5;

          let d = w1 * 0.32 + w2 * 0.28 + w3 * 0.22 + w4 * 0.18;

          const ex = Math.abs(nx - 0.5) * 2;
          const ey = Math.abs(ny - 0.5) * 2;
          d *= 1 - Math.pow(Math.max(ex, ey), 2.5) * 0.6;

          row += charAt(d);
        }
        lines.push(row);
      }

      el.textContent = lines.join("\n");
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      ro.disconnect();
    };
  }, [shouldReduce]);

  return (
    <pre
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full font-mono select-none pointer-events-none overflow-hidden whitespace-pre"
      style={{
        color,
        opacity,
        fontSize: "clamp(7px, 0.65vw, 10px)",
        lineHeight: 1.35,
        letterSpacing: "0.04em",
      }}
    />
  );
}
