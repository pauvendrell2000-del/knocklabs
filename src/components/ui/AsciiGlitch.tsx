"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Only single-width ASCII chars — guaranteed monospace alignment
const CHARS = "01ABCDEFGHJKLMNPQRSTUVWXYZ<>{}[]()/\\|-_+=*#@$&?!:;.,~^";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

type Props = {
  rows?: number;
  cols?: number;
  color?: string;
  className?: string;
  density?: number;
  speed?: number;
};

export default function AsciiGlitch({
  rows = 8,
  cols = 32,
  color = "#FF4C00",
  className = "",
  density = 0.45,
  speed = 100,
}: Props) {
  const shouldReduce = useReducedMotion();
  const [grid, setGrid] = useState<string[]>(() =>
    Array.from({ length: rows * cols }, () =>
      Math.random() < density ? randomChar() : " "
    )
  );
  const raf = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (shouldReduce) return;

    raf.current = setInterval(() => {
      setGrid((prev) => {
        const next = [...prev];
        const mutations = Math.floor(rows * cols * 0.06);
        for (let i = 0; i < mutations; i++) {
          const idx = Math.floor(Math.random() * rows * cols);
          next[idx] = Math.random() < density ? randomChar() : " ";
        }
        return next;
      });
    }, speed);

    return () => {
      if (raf.current) clearInterval(raf.current);
    };
  }, [rows, cols, density, speed, shouldReduce]);

  const lines = Array.from({ length: rows }, (_, r) =>
    grid.slice(r * cols, (r + 1) * cols).join("")
  );

  return (
    <pre
      className={`font-mono text-[11px] leading-[1.4] pointer-events-none select-none whitespace-pre ${className}`}
      style={{ color, letterSpacing: "0.05em" }}
      aria-hidden="true"
    >
      {lines.join("\n")}
    </pre>
  );
}
