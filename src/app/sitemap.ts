import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const BASE = "https://knocklabs.es";
const locales = ["es", "en"] as const;
const staticPages = ["", "/work", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const projectEntries = projects.filter(p => !p.hidden).flatMap((project) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const serviceEntries = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...projectEntries, ...serviceEntries];
}
