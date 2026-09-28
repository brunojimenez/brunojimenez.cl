"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Un solo observador para todo el sitio: marca data-revealed en los
// elementos [data-reveal] cuando entran en pantalla. Se reinicia al cambiar
// de página para tomar los elementos nuevos.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])"
    );
    if (!pending.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      // threshold 0: también sirve para bloques más altos que la pantalla
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
