import type { Metadata } from "next";
import KvServiceLanding from "@/components/knockvision/sections/KvServiceLanding";
import KvFinalCTA from "@/components/knockvision/sections/KvFinalCTA";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = (params.locale as "es" | "en") ?? "es";
  return {
    title: locale === "es" ? "Producto — Knockvision" : "Product — Knockvision",
    description:
      locale === "es"
        ? "Render de producto premium para marcas, lanzamientos y campañas."
        : "Premium product rendering for brands, launches and campaigns.",
  };
}

export default function KnockvisionProductoPage() {
  return (
    <>
      <KvServiceLanding serviceKey="product" category="product" />
      <KvFinalCTA />
    </>
  );
}
