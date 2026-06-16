import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getKvProjectBySlug, kvProjects } from "@/data/knockvision-projects";
import KvProjectDetail from "@/components/knockvision/sections/KvProjectDetail";

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    kvProjects.map((p) => ({ locale, slug: p.slug }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getKvProjectBySlug(params.slug);
  if (!project) return { title: "Knockvision" };
  const locale = (params.locale as "es" | "en") ?? "es";
  return {
    title: `${project.title[locale]} — Knockvision`,
    description: project.title[locale],
  };
}

export default function KnockvisionProjectPage({ params }: Props) {
  const project = getKvProjectBySlug(params.slug);
  if (!project) notFound();
  return <KvProjectDetail project={project} />;
}
