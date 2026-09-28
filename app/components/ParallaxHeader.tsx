"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

export type DisenoParallax = "red" | "circuito" | "orbitas" | "flujos";

interface ParallaxHeaderProps {
  /** Diseño en public/images/bandas: {diseno}-oscuro.webp y {diseno}-claro.webp */
  diseno: DisenoParallax;
  children: ReactNode;
  className?: string;
  /** Fracción del scroll que "frena" el fondo: 0 = sin efecto, 0.25 = baja al 75 % de la velocidad. */
  speed?: number;
}

// La imagen es más alta que el encabezado (sobra EXTRA arriba y abajo) y se
// traslada en sentido contrario al scroll, así se mueve más lento que el
// contenido. El desplazamiento se limita para que nunca se vea el borde.
const EXTRA = 0.35;

export default function ParallaxHeader({
  diseno,
  children,
  className = "",
  speed = 0.25,
}: ParallaxHeaderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Distancia entre el centro del encabezado y el centro de la pantalla
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const limit = rect.height * EXTRA;
      const y = Math.max(-limit, Math.min(limit, -offset * speed));
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative isolate overflow-hidden bg-[var(--background)] ${className}`}
    >
      <div
        ref={layerRef}
        aria-hidden="true"
        className="absolute inset-x-0 -z-10 will-change-transform"
        style={{ top: `-${EXTRA * 100}%`, bottom: `-${EXTRA * 100}%` }}
      >
        {/* Una versión por tema; la oculta no se descarga (carga diferida). */}
        <Image
          src={`/images/bandas/${diseno}-oscuro.webp`}
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover dark:block"
        />
        <Image
          src={`/images/bandas/${diseno}-claro.webp`}
          alt=""
          fill
          sizes="100vw"
          className="block object-cover dark:hidden"
        />
      </div>
      {/* Zona calma a la izquierda para el texto y fundido inferior hacia la sección siguiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[var(--background)]/90 via-[var(--background)]/55 to-[var(--background)]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-b from-transparent to-[var(--background)]"
      />
      {children}
    </section>
  );
}
