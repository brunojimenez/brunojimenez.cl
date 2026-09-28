"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./ScrollProgress";

// Inicio va en el logo y Contacto en el botón "Hablemos": la nav queda en 4 enlaces.
const navLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/como-trabajo", label: "Cómo trabajo" },
  { href: "/cv", label: "Trayectoria" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" fill="currentColor" className="text-[var(--text-primary)]" />
      <text
        x="7"
        y="23"
        fill="white"
        fontSize="18"
        fontWeight="700"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        className="dark:fill-[var(--background)]"
      >
        B
      </text>
      <circle cx="23" cy="20" r="3" fill="#1D4ED8" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight tracking-tight text-[var(--text-primary)]">
                Bruno Jiménez
              </span>
              <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
                Tech lead · Integración
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button href="/contacto" variant="accent" className="hidden sm:inline-flex">
              Hablemos
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2 text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)] lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Menú principal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[var(--border)]">
                <Button
                  href="/contacto"
                  variant="accent"
                  className="w-full justify-center"
                >
                  Hablemos
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
}
