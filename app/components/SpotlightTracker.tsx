"use client";

import { useEffect } from "react";

// Un solo listener para todo el sitio: guarda la posición del puntero dentro
// del recuadro .spotlight que está debajo, para el resplandor de effects.css.
export default function SpotlightTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const box = target?.closest?.(".spotlight") as HTMLElement | null;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      box.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      box.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
