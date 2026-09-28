"use client";

import { useEffect, useState } from "react";
import Tag from "./Tag";

export interface Era {
  id: string;
  periodo: string;
  etiqueta: string;
}

interface EraSidebarProps {
  eras: Era[];
  filosofia: string;
  especialidades: string[];
}

// Distancia desde el borde superior (header fijo + aire) a partir de la cual
// una época se considera "en lectura".
const ACTIVE_OFFSET = 160;

export default function EraSidebar({
  eras,
  filosofia,
  especialidades,
}: EraSidebarProps) {
  const [activeId, setActiveId] = useState(eras[0]?.id);

  // Resalta la época cuyo primer hito ya pasó bajo el header. Son pocas
  // mediciones por evento y el navegador ya entrega el scroll una vez por frame.
  useEffect(() => {
    const update = () => {
      let current = eras[0]?.id;
      for (const era of eras) {
        const el = document.getElementById(era.id);
        if (el && el.getBoundingClientRect().top - ACTIVE_OFFSET <= 0) {
          current = era.id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [eras]);

  return (
    <aside className="flex h-fit flex-col gap-4 lg:sticky lg:top-24">
      <nav
        aria-label="Épocas de la trayectoria"
        className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
            Línea de tiempo
          </span>
          <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--accent)]">
            {eras.length} épocas
          </span>
        </div>

        <ul className="mt-3 flex flex-col gap-1">
          {eras.map((era) => {
            const active = era.id === activeId;
            return (
              <li key={era.id}>
                <a
                  href={`#${era.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`flex items-center justify-between gap-3 rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-[var(--accent-muted)] font-medium text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span className="whitespace-nowrap tabular-nums">
                    {era.periodo}
                  </span>
                  <span
                    className={`text-right font-mono text-[0.6875rem] ${
                      active ? "text-[var(--accent)]" : "text-[var(--text-subtle)]"
                    }`}
                  >
                    {era.etiqueta}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 rounded-[var(--radius-sm)] bg-[var(--surface)] p-3">
          <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
            Filosofía de trabajo
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
            “{filosofia}”
          </p>
        </div>
      </nav>

      <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
        <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
          Especialidad núcleo
        </span>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {especialidades.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </aside>
  );
}
