"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 1200;

export default function Loader() {
  const [visible, setVisible] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const seen = sessionStorage.getItem("knock_loader_seen");
    if (seen) return;
    sessionStorage.setItem("knock_loader_seen", "1");

    setVisible(true);
    // No cleanup: Strict Mode's simulated unmount would kill the timer before
    // the second effect run returns early (sessionStorage already set) → stuck.
    setTimeout(() => setVisible(false), DURATION);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-base flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.05 }}
        >
          <div className="overflow-hidden whitespace-nowrap w-full">
            <motion.div
              className="flex gap-12 font-archivo font-black text-[clamp(3rem,10vw,8rem)] text-cream/10 select-none"
              style={{ letterSpacing: "-0.035em" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="shrink-0">KNOCK LABS &nbsp;</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: DURATION / 1000, ease: [0.65, 0, 0.35, 1] }}
          />

          <motion.span
            className="absolute bottom-6 right-6 md:right-12 font-mono text-xs text-cream/30 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Loading...
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
