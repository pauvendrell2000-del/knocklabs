import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    projects.filter(p => !p.hidden).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const locale = params.locale as "es" | "en";
  const title = `${project.name[locale]} — ${project.client} | Knock Labs`;
  const description =
    locale === "es"
      ? project.challenge.es.slice(0, 155)
      : project.challenge.en.slice(0, 155);
  const url = `https://knocklabs.es/${locale}/work/${params.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `https://knocklabs.es/es/work/${params.slug}`,
        en: `https://knocklabs.es/en/work/${params.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Knock Labs",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const locale = params.locale as "es" | "en";
  const nextProject = getProjectBySlug(project.nextSlug);

  return <ProjectDetail project={project} locale={locale} nextProject={nextProject} />;
}
