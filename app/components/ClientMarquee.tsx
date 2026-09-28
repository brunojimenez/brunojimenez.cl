interface ClientMarqueeProps {
  clients: string[];
}

// Banner rotatorio solo con CSS (ver .marquee en globals.css). La lista va dos
// veces para que el desplazamiento de -50% cierre el bucle sin saltos; la copia
// queda oculta para lectores de pantalla.
export default function ClientMarquee({ clients }: ClientMarqueeProps) {
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="marquee-group flex shrink-0 items-center gap-x-12 pr-12"
          >
            {clients.map((client) => (
              <li
                key={client}
                className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold tracking-tight text-[var(--text-secondary)]"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                />
                {client}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
