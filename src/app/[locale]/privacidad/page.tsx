import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad — Knock Labs",
  description: "Política de privacidad de Knock Labs conforme al Reglamento General de Protección de Datos (RGPD) y la LOPDGDD.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `Knock Labs
Correo electrónico: hola@knocklabs.es
Barcelona, España`,
  },
  {
    title: "2. Datos que recogemos",
    content: `Recogemos los datos que usted nos facilita voluntariamente a través del formulario de contacto: nombre, dirección de correo electrónico, empresa (opcional) y mensaje. No recogemos datos de navegación más allá de los que el servidor web registra de forma estándar (IP anonimizada, agente de usuario, URL solicitada).`,
  },
  {
    title: "3. Finalidad y base jurídica del tratamiento",
    content: `Los datos del formulario de contacto se tratan con la finalidad de atender su consulta y gestionar la relación comercial o profesional que pueda derivarse de ella. La base jurídica del tratamiento es el consentimiento expreso del interesado (art. 6.1.a RGPD) y, en su caso, la ejecución de un precontrato o contrato (art. 6.1.b RGPD).`,
  },
  {
    title: "4. Destinatarios y transferencias internacionales",
    content: `Sus datos no serán cedidos a terceros salvo obligación legal. Para el envío de correos electrónicos utilizamos Resend (Resend Inc., EE.UU.), que cuenta con las garantías adecuadas conforme al RGPD. No realizamos otras transferencias internacionales de datos.`,
  },
  {
    title: "5. Plazo de conservación",
    content: `Conservaremos sus datos durante el tiempo necesario para atender su consulta y, en su caso, durante el plazo legal exigible según la relación mantenida. Una vez finalizada la relación, los datos se bloquearán y eliminarán conforme a los plazos legales aplicables.`,
  },
  {
    title: "6. Derechos del interesado",
    content: `Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un correo a hola@knocklabs.es. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
  },
  {
    title: "7. Cambios en esta política",
    content: `Podemos actualizar esta Política de Privacidad en cualquier momento. La fecha de última actualización aparece al pie del documento. Le recomendamos revisarla periódicamente.`,
  },
];

export default function PrivacidadPage() {
  return (
    <LegalPage
      label="// Privacidad"
      title="Política de Privacidad"
      lastUpdated="Última actualización: enero 2025"
      sections={sections}
    />
  );
}
