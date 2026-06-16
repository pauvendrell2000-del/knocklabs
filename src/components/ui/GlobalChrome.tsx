"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";

export default function GlobalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
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
