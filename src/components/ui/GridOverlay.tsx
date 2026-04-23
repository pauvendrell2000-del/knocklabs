"use client";

import { motion } from "framer-motion";

const COLS = 12;

export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] hidden md:grid"
      style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: "1rem", padding: "0 2rem" }}
      aria-hidden
    >
      {Array.from({ length: COLS }).map((_, i) => (
        <motion.div
          key={i}
          className="h-full bg-cream/[0.025] origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.05 * i,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </div>
  );
}
