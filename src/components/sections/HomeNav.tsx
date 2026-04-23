"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pages = [
  {
    num: "01",
    title: "Work",
    desc: "Proyectos seleccionados",
    path: "/work",
    light: true,
  },
  {
    num: "02",
    title: "Servicios",
    desc: "Lo que hacemos",
    path: "/services",
    light: false,
  },
  {
    num: "03",
    title: "Nosotros",
    desc: "Quiénes somos",
    path: "/about",
    light: false,
  },
  {
    num: "04",
    title: "Contacto",
    desc: "Hablemos",
    path: "/contact",
    light: true,
  },
];

export default function HomeNav() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <section className="border-t border-dark02">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark02">
        {pages.map((page, i) => {
          const bg = page.light ? "#F2F0EB" : "#0D0D0D";
          const bgHover = page.light ? "#e8e6e1" : "#1A1A1A";
          const textColor = page.light ? "#0D0D0D" : "#F2F0EB";
          const numColor = page.light ? "#FF4C00" : "rgba(255,76,0,0.6)";
          const arrowColor = page.light ? "rgba(13,13,13,0.15)" : "rgba(242,240,235,0.12)";

          return (
            <ScrollReveal key={page.path} delay={i * 0.07}>
              <Link href={lp(page.path)} className="group block h-full">
                <motion.div
                  className="px-10 md:px-14 py-16 md:py-20 flex flex-col gap-6 h-full min-h-[280px]"
                  style={{ backgroundColor: bg }}
                  whileHover={{ backgroundColor: bgHover }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: numColor }}
                    >
                      {page.num}
                    </span>
                    <motion.span
                      className="text-lg transition-colors duration-300"
                      style={{ color: arrowColor }}
                      whileHover={{ x: 3, y: -3 }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  <div className="mt-auto">
                    <h3
                      className="font-archivo font-black mb-3 transition-colors duration-300 group-hover:text-accent"
                      style={{
                        fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                        letterSpacing: "-0.035em",
                        lineHeight: 0.92,
                        color: textColor,
                      }}
                    >
                      {page.title}
                    </h3>
                    <p
                      className="font-mono text-[11px] tracking-widest uppercase"
                      style={{ color: page.light ? "rgba(13,13,13,0.35)" : "rgba(242,240,235,0.3)" }}
                    >
                      {page.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
