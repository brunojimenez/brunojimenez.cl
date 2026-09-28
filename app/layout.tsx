import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./effects.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpotlightTracker from "./components/SpotlightTracker";
import RevealObserver from "./components/RevealObserver";
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_URL,
  THEME_STORAGE_KEY,
  openGraphBase,
} from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const homeTitle = "Bruno Jiménez | Liderazgo técnico en backend e integración";
const homeDescription =
  "25 años integrando y modernizando sistemas empresariales. Tech lead backend en WOM: microservicios en OpenShift y AWS, y estándares de Agentic Coding.";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s | Bruno Jiménez",
  },
  description: homeDescription,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...openGraphBase,
    url: "/",
    title: homeTitle,
    description: homeDescription,
  },
  // Sin título ni descripción: Next los completa desde openGraph en cada página.
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Corre antes del primer pintado para aplicar el tema guardado sin parpadeo.
// También marca data-js para que las animaciones de aparición solo oculten
// contenido cuando hay JavaScript.
const themeScript = `document.documentElement.dataset.js="";try{if(localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)})==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.webp`,
  email: `mailto:${CONTACT_EMAIL}`,
  jobTitle: "Tech Lead Backend e integración de sistemas",
  worksFor: { "@type": "Organization", name: "WOM Chile" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Pontificia Universidad Católica de Valparaíso",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rancagua",
    addressCountry: "CL",
  },
  knowsAbout: [
    "Integración de sistemas",
    "Arquitectura de microservicios",
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Apache Camel",
    "OpenShift",
    "AWS",
    "Carrier billing",
    "Desarrollo asistido por IA",
    "Agentic Coding",
  ],
  sameAs: [LINKEDIN_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      // El script de tema puede agregar data-theme antes de hidratar.
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SpotlightTracker />
        <RevealObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Estadísticas anónimas de visitas, sin cookies (Vercel Web Analytics) */}
        <Analytics />
      </body>
    </html>
  );
}
