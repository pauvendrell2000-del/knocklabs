import type { Metadata } from "next";
import KvHero from "@/components/knockvision/sections/KvHero";
import KvIntro from "@/components/knockvision/sections/KvIntro";
import KvShowcase from "@/components/knockvision/sections/KvShowcase";
import KvManifesto from "@/components/knockvision/sections/KvManifesto";
import KvProcess from "@/components/knockvision/sections/KvProcess";
import KvByKnocklabs from "@/components/knockvision/sections/KvByKnocklabs";
import KvFinalCTA from "@/components/knockvision/sections/KvFinalCTA";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Knockvision — Estudio de visualización por Knocklabs",
    description: "Render arquitectónico, producto e imagen de campaña 3D. Un estudio de visualización premium por Knocklabs.",
  },
  en: {
    title: "Knockvision — A visual rendering studio by Knocklabs",
    description: "Architectural visualization, product rendering and 3D campaign imagery. A premium visual studio by Knocklabs.",
  },
};

export function generateMetadata({ params }: Props): Metadata {
  const locale = (params.locale as "es" | "en") ?? "es";
  const m = meta[locale] ?? meta.es;
  return { title: m.title, description: m.description };
}

export default function KnockvisionHomePage() {
  return (
    <>
      <KvHero />
      <KvIntro />
      <KvShowcase />
      <KvManifesto />
      <KvProcess />
      <KvByKnocklabs />
      <KvFinalCTA />
    </>
  );
}
