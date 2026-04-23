import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies — Knock Labs",
  description: "Política de cookies del sitio web de Knock Labs conforme a la LSSI-CE y la normativa europea de privacidad.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. ¿Qué son las cookies?",
    content: `Las cookies son pequeños archivos de texto que los sitios web guardan en su dispositivo cuando los visita. Permiten que el sitio recuerde sus preferencias y mejore su experiencia de navegación.`,
  },
  {
    title: "2. Cookies que utilizamos",
    content: `Este sitio web no utiliza cookies de seguimiento ni de publicidad. Únicamente se pueden generar cookies técnicas estrictamente necesarias para el funcionamiento del sitio (por ejemplo, para gestionar la sesión o el idioma seleccionado). Estas cookies no requieren su consentimiento conforme al artículo 22.2 de la LSSI-CE.

Si en el futuro incorporamos herramientas de análisis u otras que impliquen el uso de cookies no esenciales, actualizaremos esta política y solicitaremos su consentimiento previo.`,
  },
  {
    title: "3. Cómo gestionar las cookies",
    content: `Puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento. Tenga en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento del sitio.

Instrucciones según navegador:
— Chrome: Configuración → Privacidad y seguridad → Cookies
— Firefox: Opciones → Privacidad & Seguridad → Cookies
— Safari: Preferencias → Privacidad → Gestionar datos del sitio web
— Edge: Configuración → Cookies y permisos del sitio`,
  },
  {
    title: "4. Cambios en esta política",
    content: `Podemos actualizar esta Política de Cookies en cualquier momento. La fecha de última actualización aparece al pie del documento.`,
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      label="// Cookies"
      title="Política de Cookies"
      lastUpdated="Última actualización: enero 2025"
      sections={sections}
    />
  );
}
