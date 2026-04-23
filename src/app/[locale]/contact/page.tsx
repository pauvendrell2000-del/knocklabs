import type { Metadata } from "next";
import ContactContent from "./ContactContent";

type Props = { params: { locale: string } };

const meta = {
  es: {
    title: "Contacto — Knock Labs",
    description: "Cuéntanos tu proyecto. Sin compromisos ni contratos largos. Respondemos en menos de 24 horas.",
  },
  en: {
    title: "Contact — Knock Labs",
    description: "Tell us about your project. No commitments, no long contracts. We reply within 24 hours.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as "es" | "en";
  const m = meta[locale] ?? meta.es;
  const url = `https://knocklabs.es/${locale}/contact`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: { es: "https://knocklabs.es/es/contact", en: "https://knocklabs.es/en/contact" },
    },
    openGraph: { title: m.title, description: m.description, url, locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
