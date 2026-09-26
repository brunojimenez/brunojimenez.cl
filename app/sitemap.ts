import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://brunojimenez.cl";
  const pages = ["", "/contacto"];

  return pages.map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: p === "" ? "monthly" : "yearly",
    priority: p === "" ? 1 : 0.7,
  }));
}
