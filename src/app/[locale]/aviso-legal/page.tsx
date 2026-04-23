import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Aviso Legal — Knock Labs",
  description: "Aviso legal e información sobre el titular del sitio web de Knock Labs, conforme a la Ley 34/2002 (LSSI-CE).",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Datos identificativos del titular",
    content: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:

Denominación social: Knock Labs
Correo electrónico: hola@knocklabs.es
Domicilio: Barcelona, España
Sitio web: https://knocklabs.es`,
  },
  {
    title: "2. Objeto y ámbito de aplicación",
    content: `El presente Aviso Legal regula el acceso y uso del sitio web https://knocklabs.es (en adelante, el «Sitio Web») que Knock Labs pone a disposición de los usuarios de Internet.

El acceso al Sitio Web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. Si no está de acuerdo con alguna de las disposiciones contenidas en el presente texto legal, le rogamos que no acceda ni use el Sitio Web.`,
  },
  {
    title: "3. Propiedad intelectual e industrial",
    content: `Todos los contenidos del Sitio Web (textos, imágenes, diseños, logotipos, código fuente, etc.) son propiedad de Knock Labs o de terceros que han autorizado su uso, y están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial.

Queda expresamente prohibida la reproducción total o parcial de los contenidos del Sitio Web sin autorización previa y por escrito de Knock Labs.`,
  },
  {
    title: "4. Responsabilidad",
    content: `Knock Labs no se hace responsable de los daños o perjuicios que pudieran derivarse del acceso o uso del Sitio Web, ni de las interrupciones en la disponibilidad del mismo por causas ajenas a su voluntad.

Knock Labs se reserva el derecho a modificar, suspender o cancelar el Sitio Web o cualquiera de sus contenidos sin previo aviso.`,
  },
  {
    title: "5. Legislación aplicable y jurisdicción",
    content: `El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales de la ciudad de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.`,
  },
];

export default function AvisoLegalPage() {
  return (
    <LegalPage
      label="// Legal"
      title="Aviso Legal"
      lastUpdated="Última actualización: enero 2025"
      sections={sections}
    />
  );
}
