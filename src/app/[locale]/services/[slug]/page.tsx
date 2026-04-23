import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/data/services";
import ServiceDetail from "@/components/sections/ServiceDetail";

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return {};
  const locale = params.locale as "es" | "en";
  const title = `${service.name[locale]} — Knock Labs`;
  const description = service.tagline[locale];
  const url = `https://knocklabs.es/${locale}/services/${params.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `https://knocklabs.es/es/services/${params.slug}`,
        en: `https://knocklabs.es/en/services/${params.slug}`,
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
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();
  const locale = params.locale as "es" | "en";
  const nextService = getService(service.nextSlug);

  return <ServiceDetail service={service} locale={locale} nextService={nextService} />;
}
