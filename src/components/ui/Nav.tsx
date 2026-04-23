"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as [number, number, number, number];

function NavLink({ href, label, isActive, onClick, dark }: { href: string; label: string; isActive: boolean; onClick?: () => void; dark?: boolean }) {
  return (
    <Link href={href} onClick={onClick} className="relative group py-1">
      <span
        className={`font-archivo font-medium text-sm transition-colors duration-200 ${
          dark
            ? isActive ? "text-[#0D0D0D]" : "text-[#0D0D0D]/50 group-hover:text-[#0D0D0D]"
            : isActive ? "text-cream" : "text-cream/50 group-hover:text-cream"
        }`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {label}
      </span>
      <span className={`absolute bottom-0 left-0 w-full h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${dark ? "bg-[#0D0D0D]" : "bg-cream"}`} />
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-px bg-accent" />
      )}
    </Link>
  );
}

export default function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [locale, setLocale] = useState("es");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Pages that start with a cream/light background
  const segments = pathname.split("/");
  const isLightPage =
    (segments[2] === "work" && !!segments[3]) ||
    (segments[2] === "services" && !!segments[3]) ||
    segments[2] === "aviso-legal" ||
    segments[2] === "privacidad" ||
    segments[2] === "cookies";

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  const navBg = useTransform(
    scrollY,
    [0, 80],
    isLightPage
      ? ["rgba(242,240,235,0)", "rgba(13,13,13,0.92)"]
      : ["rgba(13,13,13,0)", "rgba(13,13,13,0.92)"]
  );

  const useDark = isLightPage && !scrolled;

  useEffect(() => {
    const seg = pathname.split("/")[1];
    if (seg === "en" || seg === "es") setLocale(seg);
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const localePath = (path: string) => `/${locale}${path}`;
  const otherLocale = locale === "es" ? "en" : "es";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const links = [
    { href: localePath("/work"), label: t("work") },
    { href: localePath("/services"), label: t("services") },
    { href: localePath("/about"), label: t("about") },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor: navBg }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${useDark ? "border-[#0D0D0D]/[0.06]" : "border-cream/[0.06]"}`}
        initial={{ y: -104, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      >
        <div
          className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between"
          style={{ height: "clamp(64px, 8vw, 104px)" }}
        >
          {/* Badge */}
          <Link href={localePath("/")} className="group">
            <motion.div
              className={`font-archivo font-black px-3 py-1.5 group-hover:bg-accent group-hover:text-cream transition-colors duration-200 ${
                useDark ? "bg-[#0D0D0D] text-cream" : "bg-cream text-base"
              }`}
              style={{ letterSpacing: "-0.06em", fontSize: "clamp(0.75rem, 1vw, 0.9rem)" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.15 }}
            >
              KNOCK
            </motion.div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} isActive={pathname === href || pathname.startsWith(`${href}/`)} dark={useDark} />
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5">
            <Link
              href={otherPath}
              className={`font-mono text-[11px] hover:text-accent transition-colors duration-200 tracking-widest uppercase ${useDark ? "text-[#0D0D0D]/40" : "text-cream/30"}`}
            >
              {otherLocale}
            </Link>

            <Link
              href={localePath("/contact")}
              className={`hidden md:inline-flex items-center gap-1.5 font-archivo font-semibold px-4 py-2 text-sm transition-colors duration-200 ${
                useDark
                  ? "bg-[#0D0D0D] text-cream hover:bg-accent"
                  : "bg-accent text-cream hover:bg-cream hover:text-base"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("cta")}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 relative z-[60]"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <motion.span
                className={`block w-5 h-px origin-center ${useDark ? "bg-[#0D0D0D]" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
              <motion.span
                className={`block w-3 h-px ${useDark ? "bg-[#0D0D0D]" : "bg-cream"}`}
                animate={mobileOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`block w-5 h-px origin-center ${useDark ? "bg-[#0D0D0D]" : "bg-cream"}`}
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ marginTop: mobileOpen ? 0 : undefined }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-base flex flex-col px-6 pt-32 pb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <nav className="flex flex-col gap-2 flex-1">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.3, ease: EASE }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-archivo font-black py-4 border-b border-dark02 transition-colors duration-200 ${
                      pathname === href || pathname.startsWith(`${href}/`) ? "text-accent" : "text-cream/60 hover:text-cream"
                    }`}
                    style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.07, duration: 0.3, ease: EASE }}
                className="pt-8"
              >
                <Link
                  href={localePath("/contact")}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center bg-accent text-cream font-archivo font-semibold px-6 py-3 text-base hover:bg-cream hover:text-base transition-colors duration-200"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {t("cta")}
                </Link>
              </motion.div>
            </nav>

            <div className="flex items-center gap-4 mt-auto">
              <Link
                href={otherPath}
                className="font-mono text-[11px] text-cream/30 hover:text-accent transition-colors duration-200 tracking-widest uppercase"
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
