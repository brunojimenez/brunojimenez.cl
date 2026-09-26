"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cv", label: "Trayectoria" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/como-trabajo", label: "Cómo trabajo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-lg font-semibold text-[var(--text-primary)]"
          >
            Bruno Jiménez
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contacto" variant="primary" className="px-4 py-2">
              Hablemos
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] p-2 text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)] lg:hidden"
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
        </nav>
      </Container>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contacto"
                variant="primary"
                className="w-full text-center"
              >
                Hablemos
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
