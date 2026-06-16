"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

export default function KvNav() {
  const t = useTranslations("knockvision.nav");
  const pathname = usePathname() || "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "en" ? "en" : "es";
  const otherLocale = locale === "es" ? "en" : "es";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const base = `/${locale}/knockvision`;

  // Hero-image pages: nav starts white, transitions to dark on scroll
  const isHeroPage =
    pathname === base || pathname === `${base}/` ||
    pathname === `/es/knockvision` || pathname === `/en/knockvision`;

  // When over the hero image → white text. Otherwise always dark.
  const light = isHeroPage && !scrolled;

  const links = [
    { href: `${base}/proyectos`,    label: t("projects") },
    { href: `${base}/arquitectura`, label: t("architecture") },
    { href: `${base}/producto`,     label: t("product") },
    { href: `${base}/contacto`,     label: t("contact") },
  ];

  // Tint the main viewport scrollbar Gulf Blue while in Knockvision
  useEffect(() => {
    document.documentElement.classList.add("kv-page");
    return () => document.documentElement.classList.remove("kv-page");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll(); // initialise on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Derived colour tokens
  const brand        = light ? "text-white"        : "text-[#1A1A1A]";
  const navLink      = light ? "text-white/70"     : "text-[#1A1A1A]/45";
  const navActive    = light ? "text-white"        : "text-kv-accent";
  const navHover     = light ? "hover:text-white"  : "hover:text-[#1A1A1A]";
  const underlineHov = light ? "bg-white"          : "bg-[#1A1A1A]";
  const underlineAct = light ? "bg-white"          : "bg-kv-accent";
  const aux          = light ? "text-white/40"     : "text-[#1A1A1A]/30";
  const auxHover     = light ? "hover:text-white"  : "hover:text-[#1A1A1A]";
  const burger       = light ? "bg-white"          : "bg-[#1A1A1A]";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-[#1A1A1A]/[0.07] shadow-[0_1px_0_rgba(26,26,26,0.04)]"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
      >
        <div
          className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between"
          style={{ height: "clamp(60px, 5.5vw, 84px)" }}
        >
          {/* Brand */}
          <Link href={base} className="group">
            <span
              className={`font-archivo font-black transition-colors duration-500 ${brand}`}
              style={{ fontSize: "clamp(0.78rem, 0.9vw, 0.9rem)", letterSpacing: "-0.04em" }}
            >
              KNOCKVISION
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {links.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-archivo font-medium text-sm py-1 group transition-colors duration-500 ${
                    isActive ? navActive : `${navLink} ${navHover}`
                  }`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-full h-px ${underlineHov} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]`} />
                  {isActive && <span className={`absolute bottom-0 left-0 w-full h-px ${underlineAct} transition-colors duration-500`} />}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <Link
              href={otherPath}
              className={`font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 ${aux} ${auxHover}`}
            >
              {otherLocale}
            </Link>
            <Link
              href={`/${locale}`}
              className={`hidden md:inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 group ${aux} ${auxHover}`}
            >
              <span>Knocklabs</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <motion.span
                className={`block w-5 h-px origin-center transition-colors duration-500 ${burger}`}
                animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              />
              <motion.span
                className={`block w-3 h-px transition-colors duration-500 ${burger}`}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className={`block w-5 h-px origin-center transition-colors duration-500 ${burger}`}
                animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay — always dark bg, so always dark text */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col px-6 pb-10"
            style={{ paddingTop: "clamp(80px, 14vw, 110px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <nav className="flex flex-col flex-1">
              {links.map(({ href, label }, i) => {
                const isActive = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.3, ease: EASE }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-archivo font-black py-4 border-b border-[#1A1A1A]/[0.09] transition-opacity duration-200 ${
                        isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/45 hover:text-[#1A1A1A]"
                      }`}
                      style={{
                        fontSize: "clamp(1.75rem, 7vw, 3rem)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="flex items-center justify-between mt-10">
              <Link
                href={`/${locale}`}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/35 hover:text-[#1A1A1A] transition-colors duration-200"
              >
                Knocklabs ↗
              </Link>
              <Link
                href={otherPath}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors duration-200"
              >
                {otherLocale}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
