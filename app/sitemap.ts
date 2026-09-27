import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const pages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/cv", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/proyectos", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/como-trabajo", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/sobre-mi", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contacto", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: base + page.path,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
