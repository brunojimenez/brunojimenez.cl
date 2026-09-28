"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms, para escalonar elementos hermanos. */
  delay?: number;
  className?: string;
}

// Marca el bloque con data-revealed cuando entra en pantalla; la animación
// vive en globals.css (.reveal). Solo se oculta si hay JS (html[data-js]),
// así el contenido siempre es visible sin JavaScript.
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
