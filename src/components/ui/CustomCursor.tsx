"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    const move = (e: MouseEvent) => {
      setDot({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    const over = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setIsHovering(!!target?.closest?.("a, button, [data-hover]"));
    };
    document.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  useEffect(() => {
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    let animId: number;

    const loop = () => {
      setPos((prev) => ({
        x: lerp(prev.x, dot.x, 0.12),
        y: lerp(prev.y, dot.y, 0.12),
      }));
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [dot]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[10000]"
        style={{ x: dot.x - 3, y: dot.y - 3 }}
      />
      {/* Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-cream/30 mix-blend-difference"
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          x: pos.x - (isHovering ? 30 : 16),
          y: pos.y - (isHovering ? 30 : 16),
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}
