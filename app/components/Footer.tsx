import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-elevated)]">
      <Container>
        <div className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-1 min-w-0 flex-col gap-1">
            <p className="text-sm text-[var(--text-secondary)]">
              © {currentYear} Bruno Jiménez. Ingeniero de Ejecución en Informática (PUCV).
            </p>
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
              Arquitectura de software • Integración • Agentic Coding
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-6">
            <a
              href="mailto:hola@brunojimenez.cl"
              className="font-mono text-[0.8125rem] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              hola@brunojimenez.cl
            </a>
            <a
              href="https://www.linkedin.com/in/brunojimenezchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="LinkedIn de Bruno Jiménez"
            >
              LinkedIn
            </a>
            <Link
              href="/privacidad"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
