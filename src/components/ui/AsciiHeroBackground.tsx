"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Options = {
  cellSize?: number;
  radius?: number;
  baseOpacity?: number;
  accentColor?: string;
  baseColor?: string;
  chars?: string[];
};

function hexToRgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

export default function AsciiHeroBackground({
  cellSize    = 11,
  radius      = 4,
  baseOpacity = 0.09,
  accentColor = "#FF4C00",
  baseColor   = "#F2F0EB",
  chars       = ["K","N","O","C","K","·","L","A","B","S","·"],
}: Options) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const heroEl = canvas.parentElement;
    if (!heroEl) return;
    if (shouldReduce) return;

    const ctx = canvas.getContext("2d")!;

    type Cell = { char: string; heat: number; offset: number };

    let W = 0, H = 0, cols = 0, rows = 0;
    let cellW = 0, cellH = 0;
    let grid: Cell[][] = [];
    let mouseX = -9999, mouseY = -9999;
    let t = 0;
    let rafId: number;
    let destroyed = false;

    function buildGrid() {
      cellH = cellSize * 1.45;
      cellW = cellSize * 0.65;
      const rect = heroEl!.getBoundingClientRect();
      W = canvas!.width  = rect.width  || window.innerWidth;
      H = canvas!.height = rect.height || window.innerHeight;
      cols = Math.ceil(W / cellW) + 1;
      rows = Math.ceil(H / cellH) + 1;
      grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
          char:   chars[Math.floor(Math.random() * chars.length)],
          heat:   0,
          offset: Math.random() * Math.PI * 2,
        }))
      );
    }

    function draw() {
      if (destroyed) return;
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${cellSize}px 'DM Mono', monospace`;

      const accent = hexToRgb(accentColor);
      const base   = hexToRgb(baseColor);

      const rect = heroEl!.getBoundingClientRect();
      const mCol = (mouseX - rect.left) / cellW;
      const mRow = (mouseY - rect.top)  / cellH;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r][c];
          const x = c * cellW;
          const y = r * cellH;

          const dc = c - mCol;
          const dr = r - mRow;
          const dist = Math.sqrt(dc * dc + dr * dr);
          const influence = Math.max(0, 1 - dist / radius);
          const targetHeat = influence * influence;
          cell.heat += (targetHeat - cell.heat) * 0.12;

          const drifting = cell.heat < 0.05 && Math.sin(t * 0.3 + cell.offset) > 0.97;
          if (drifting || (cell.heat > 0.5 && Math.random() < cell.heat * 0.3)) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
          }

          const h = cell.heat;
          const blend = Math.min(h * 1.5, 1);
          const finalOpacity = baseOpacity + h * (0.85 - baseOpacity);
          const rr = Math.round(base.r + (accent.r - base.r) * blend);
          const gg = Math.round(base.g + (accent.g - base.g) * blend);
          const bb = Math.round(base.b + (accent.b - base.b) * blend);

          ctx.fillStyle = `rgba(${rr},${gg},${bb},${finalOpacity.toFixed(3)})`;
          ctx.fillText(cell.char, x, y + cellSize);
        }
      }

      if (!document.hidden) rafId = requestAnimationFrame(draw);
    }

    function onVisibilityChange() {
      if (!document.hidden && !destroyed) rafId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    const ro = new ResizeObserver(() => buildGrid());
    ro.observe(heroEl);

    buildGrid();
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("visibilitychange", onVisibilityChange);
    rafId = requestAnimationFrame(draw);

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [shouldReduce, cellSize, radius, baseOpacity, accentColor, baseColor, chars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
