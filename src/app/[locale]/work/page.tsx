import type { Metadata } from "next";
import WorkContent from "./WorkContent";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Proyectos — Knock Labs",
    description: "Trabajo seleccionado de Knock Labs: casos de éxito en branding, marketing digital, SEO, lanzamientos go-to-market y estrategia de marca.",
  },
  en: {
    title: "Work — Knock Labs",
    description: "Selected work by Knock Labs: success stories in branding, digital marketing, SEO, go-to-market launches and brand strategy.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as "es" | "en";
  const m = meta[locale] ?? meta.es;
  const url = `https://knocklabs.es/${locale}/work`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { es: "https://knocklabs.es/es/work", en: "https://knocklabs.es/en/work" },
    },
    openGraph: { title: m.title, description: m.description, url, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default function WorkPage() {
  return <WorkContent />;
}
