"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";

// Flip to false when the site is ready to go live
const MAINTENANCE_MODE = true;

export default function GlobalChrome({ children }: { children: React.ReactNode }) {
  // Hooks must run before any early return (rules-of-hooks)
  const pathname = usePathname() || "";

  if (MAINTENANCE_MODE) return <>{children}</>;

  const segments = pathname.split("/").filter(Boolean);
  const isKnockvision = segments[1] === "knockvision";

  if (isKnockvision) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Nav />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
