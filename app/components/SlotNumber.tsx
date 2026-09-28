import { CSSProperties } from "react";

interface SlotNumberProps {
  value: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Número estilo odómetro: cada dígito es un carrete 0–9 que rueda hasta su
// valor cuando el .reveal que lo contiene aparece (ver .slot en globals.css).
// El texto real va para lectores de pantalla; los carretes son decorativos.
export default function SlotNumber({ value }: SlotNumberProps) {
  let digitIndex = 0;

  return (
    <span className="slot">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex whitespace-pre">
        {Array.from(value).map((char, i) => {
          if (!/\d/.test(char)) {
            return <span key={i}>{char}</span>;
          }
          const style = {
            "--slot-target": char,
            "--slot-i": digitIndex++,
          } as CSSProperties;
          return (
            <span key={i} className="slot-digit" style={style}>
              <span className="slot-reel">
                {DIGITS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
