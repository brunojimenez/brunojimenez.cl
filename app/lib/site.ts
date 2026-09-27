import type { Metadata } from "next";

// Vercel redirige brunojimenez.cl -> www.brunojimenez.cl, así que www es el dominio canónico.
export const SITE_URL = "https://www.brunojimenez.cl";

export const SITE_NAME = "Bruno Jiménez";

export const LINKEDIN_URL = "https://www.linkedin.com/in/brunojimenezchavez";

export const CONTACT_EMAIL = "hola@brunojimenez.cl";

// Clave de localStorage para la preferencia de tema ("light" | "dark").
export const THEME_STORAGE_KEY = "theme";

// Los openGraph de cada página reemplazan al del layout (no se fusionan),
// así que cada página parte de esta base.
export const openGraphBase: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "es_CL",
  siteName: SITE_NAME,
  // Generada por app/opengraph-image.tsx. Se declara aquí porque un openGraph
  // de página descarta la imagen heredada del layout.
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Bruno Jiménez — Liderazgo técnico en backend e integración de sistemas",
    },
  ],
};
