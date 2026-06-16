import type { Metadata } from "next";
import KvServiceLanding from "@/components/knockvision/sections/KvServiceLanding";
import KvFinalCTA from "@/components/knockvision/sections/KvFinalCTA";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = (params.locale as "es" | "en") ?? "es";
  return {
    title: locale === "es" ? "Arquitectura — Knockvision" : "Architecture — Knockvision",
    description:
      locale === "es"
        ? "Visualización arquitectónica para estudios, promotores y marcas."
        : "Architectural visualization for studios, developers and brands.",
  };
}

export default function KnockvisionArquitecturaPage() {
  return (
    <>
      <KvServiceLanding serviceKey="architecture" category="architecture" />
      <KvFinalCTA />
    </>
  );
}
