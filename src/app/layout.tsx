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
    default: "Knock Labs — Agencia de Marketing 360°",
    template: "%s | Knock Labs",
  },
  description:
    "Agencia de marketing estratégico y consultoría integral en Barcelona. Marketing, tecnología, diseño y asesoramiento legal en un solo equipo.",
  keywords: ["agencia marketing", "marketing 360", "branding", "SEO", "SEM", "Barcelona", "diseño web"],
  authors: [{ name: "Knock Labs" }],
  creator: "Knock Labs",
  openGraph: {
    siteName: "Knock Labs",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@knocklabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Knock Labs",
  url: "https://knocklabs.com",
  email: "hola@knocklabs.com",
  logo: "https://knocklabs.com/icon.png",
  description:
    "Partner estratégico integral: marketing, tecnología, diseño y asesoramiento legal en un solo equipo.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
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
