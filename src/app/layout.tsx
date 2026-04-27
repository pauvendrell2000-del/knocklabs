import type { Metadata, Viewport } from "next";
import { Archivo, DM_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://knocklabs.es"),
  title: {
    default: "Knock Labs — Agencia de Marketing 360° en Barcelona",
    template: "%s | Knock Labs",
  },
  description:
    "Agencia de marketing 360° en Barcelona: branding, SEO/SEM, desarrollo web, diseño y consultoría legal en un solo equipo. Partner estratégico para empresas en Barcelona y toda España.",
  keywords: [
    "agencia marketing Barcelona",
    "agencia marketing 360",
    "agencia SEO Barcelona",
    "agencia SEM Barcelona",
    "branding Barcelona",
    "diseño web Barcelona",
    "desarrollo web Barcelona",
    "consultoría legal Barcelona",
    "marketing digital Barcelona",
    "agencia creativa Barcelona",
    "marketing 360 España",
    "Knock Labs",
  ],
  authors: [{ name: "Knock Labs" }],
  creator: "Knock Labs",
  publisher: "Knock Labs",
  openGraph: {
    siteName: "Knock Labs",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://knocklabs.es",
    title: "Knock Labs — Agencia de Marketing 360° en Barcelona",
    description:
      "Branding, SEO/SEM, desarrollo web, diseño y legal en un solo equipo. Tu partner 360° en Barcelona.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Knock Labs — Agencia de Marketing 360° en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@knocklabs",
    title: "Knock Labs — Agencia de Marketing 360° en Barcelona",
    description:
      "Branding, SEO/SEM, desarrollo web, diseño y legal en un solo equipo. Tu partner 360° en Barcelona.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://knocklabs.es",
    languages: {
      "es-ES": "https://knocklabs.es/es",
      "en-US": "https://knocklabs.es/en",
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://knocklabs.es/#organization",
  name: "Knock Labs",
  url: "https://knocklabs.es",
  email: "hola@knocklabs.es",
  logo: "https://knocklabs.es/icon.png",
  image: "https://knocklabs.es/og.png",
  description:
    "Agencia de marketing 360° en Barcelona: branding, SEO/SEM, desarrollo web, diseño y consultoría legal en un solo equipo.",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Cataluña",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Barcelona" },
    { "@type": "AdministrativeArea", name: "Cataluña" },
    { "@type": "Country", name: "España" },
  ],
  knowsAbout: [
    "Marketing 360",
    "Branding",
    "SEO",
    "SEM",
    "Diseño web",
    "Desarrollo web",
    "Consultoría legal",
    "Comunicación",
    "Inteligencia artificial aplicada",
  ],
  inLanguage: ["es", "en"],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${archivo.variable} ${dmMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
