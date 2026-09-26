import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-[var(--text-secondary)]">
            © {currentYear} Bruno Jiménez
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/brunojimenezchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="LinkedIn de Bruno Jiménez"
            >
              LinkedIn
            </a>
            <Link
              href="/contacto"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Contacto
            </Link>
            <Link
              href="/privacidad"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
