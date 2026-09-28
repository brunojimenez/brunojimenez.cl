import type { CSSProperties } from "react";

// Atributos para que un elemento aparezca al entrar en pantalla (ver
// RevealObserver y [data-reveal] en effects.css). Uso: <div {...reveal(100)}>.
// A diferencia de <Reveal>, no agrega un envoltorio, así no rompe grillas.
export function reveal(delay = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}
