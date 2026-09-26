import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bruno Jiménez | Backend e integración de sistemas",
    template: "%s | Bruno Jiménez",
  },
  description:
    "25 años integrando y modernizando sistemas empresariales: microservicios con Java, Spring Boot, Kafka y OpenShift para banca, retail y sector público.",
  metadataBase: new URL("https://brunojimenez.cl"),
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://brunojimenez.cl",
    siteName: "Bruno Jiménez",
    title: "Bruno Jiménez | Backend e integración de sistemas",
    description:
      "25 años integrando y modernizando sistemas empresariales: microservicios con Java, Spring Boot, Kafka y OpenShift.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Jiménez | Backend e integración de sistemas",
    description:
      "25 años integrando y modernizando sistemas empresariales: microservicios con Java, Spring Boot, Kafka y OpenShift.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
