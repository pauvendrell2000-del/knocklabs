import type { Metadata } from "next";
import HomeContent from "./HomeContent";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Knock Labs — Agencia de Marketing 360° en Barcelona",
    description: "Tu partner estratégico en marketing, tecnología, diseño y asesoramiento legal. Un solo equipo para escalar tu negocio desde Barcelona.",
  },
  en: {
    title: "Knock Labs — 360° Marketing Agency in Barcelona",
    description: "Your strategic partner in marketing, technology, design and legal advisory. One team to scale your business from Barcelona.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as "es" | "en";
  const m = meta[locale] ?? meta.es;
  const url = `https://knocklabs.es/${locale}`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { es: "https://knocklabs.es/es", en: "https://knocklabs.es/en" },
    },
    openGraph: { title: m.title, description: m.description, url, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default function HomePage() {
  return <HomeContent />;
}
