"use client";

import { ReactNode, useEffect, useRef } from "react";

interface TracingBeamProps {
  children: ReactNode;
  className?: string;
  /** Posición horizontal de la línea, como clase de Tailwind (p. ej. "left-0" o "left-4"). */
  lineClassName?: string;
}

// Una "corriente" baja por la línea a medida que el bloque avanza en pantalla:
// --beam va de 0 (el bloque recién entra) a 1 (ya pasó por la mitad de la vista).
// Los hijos con data-beam-stop reciben data-lit cuando la corriente los alcanza.
const READING_LINE = 0.55;

export default function TracingBeam({
  children,
  className = "",
  lineClassName = "left-0",
}: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const line = window.innerHeight * READING_LINE;
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      el.style.setProperty("--beam", progress.toFixed(4));
      // Enciende los hitos por los que ya pasó la corriente
      el.querySelectorAll<HTMLElement>("[data-beam-stop]").forEach((stop) => {
        stop.toggleAttribute("data-lit", stop.getBoundingClientRect().top + 12 <= line);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div aria-hidden="true" className={`beam ${lineClassName}`}>
        <div className="beam-fill" />
      </div>
      {children}
    </div>
  );
}
