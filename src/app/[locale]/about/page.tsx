import type { Metadata } from "next";
import AboutContent from "./AboutContent";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Nosotros — Knock Labs",
    description: "Conoce al equipo de Knock Labs: tu socio estratégico en marketing, tecnología, diseño y legal. Nació en Barcelona con una idea simple: escalar negocios sin fragmentar equipos.",
  },
  en: {
    title: "About — Knock Labs",
    description: "Meet the Knock Labs team: your strategic partner in marketing, technology, design and legal. Born in Barcelona with a simple idea: scale businesses without fragmenting teams.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as "es" | "en";
  const m = meta[locale] ?? meta.es;
  const url = `https://knocklabs.es/${locale}/about`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { es: "https://knocklabs.es/es/about", en: "https://knocklabs.es/en/about" },
    },
    openGraph: { title: m.title, description: m.description, url, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
