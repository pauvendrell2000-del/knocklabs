import type { Metadata } from "next";
import KvContactForm from "@/components/knockvision/sections/KvContactForm";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = (params.locale as "es" | "en") ?? "es";
  return {
    title: locale === "es" ? "Contacto — Knockvision" : "Contact — Knockvision",
    description:
      locale === "es"
        ? "¿Tienes un proyecto de visualización? Cuéntanos."
        : "Got a visualization project? Tell us about it.",
  };
}

export default function KnockvisionContactoPage() {
  return <KvContactForm />;
}
