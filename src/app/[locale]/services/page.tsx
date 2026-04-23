import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Servicios — Knock Labs",
    description: "Seis pilares, un solo equipo: Marketing 360°, Tecnología, Legal & Economía, Aceleradora, Diseño y Comunicación & IA. La solución integral para escalar tu negocio.",
  },
  en: {
    title: "Services — Knock Labs",
    description: "Six pillars, one team: Marketing 360°, Technology, Legal & Finance, Accelerator, Design and Comms & AI. The all-in-one solution to scale your business.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as "es" | "en";
  const m = meta[locale] ?? meta.es;
  const url = `https://knocklabs.es/${locale}/services`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { es: "https://knocklabs.es/es/services", en: "https://knocklabs.es/en/services" },
    },
    openGraph: { title: m.title, description: m.description, url, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default function ServicesPage() {
  return <ServicesContent />;
}
