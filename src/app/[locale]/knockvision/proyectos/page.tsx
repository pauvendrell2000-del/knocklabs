import type { Metadata } from "next";
import KvProjectsHeader from "@/components/knockvision/sections/KvProjectsHeader";
import KvProjectsGrid from "@/components/knockvision/sections/KvProjectsGrid";
import KvFinalCTA from "@/components/knockvision/sections/KvFinalCTA";
import type { KvCategory } from "@/data/knockvision-projects";

type Props = {
  params: { locale: string };
  searchParams?: { cat?: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const locale = (params.locale as "es" | "en") ?? "es";
  const isEs = locale === "es";
  return {
    title: isEs ? "Proyectos — Knockvision" : "Projects — Knockvision",
    description: isEs
      ? "Una selección de proyectos de visualización arquitectónica, producto y campañas 3D."
      : "A selection of architectural visualization, product and 3D campaign projects.",
  };
}

const VALID_CATEGORIES: KvCategory[] = [
  "architecture",
  "product",
  "interiors",
  "food-packaging",
  "retail-hospitality",
  "ai-experiments",
];

export default function KnockvisionProjectsPage({ searchParams }: Props) {
  const cat = searchParams?.cat;
  const initialCategory =
    cat && VALID_CATEGORIES.includes(cat as KvCategory) ? (cat as KvCategory) : undefined;

  return (
    <>
      <KvProjectsHeader />
      <KvProjectsGrid initialCategory={initialCategory} />
      <KvFinalCTA />
    </>
  );
}
