import type { Metadata } from "next";
import { openGraphBase } from "../lib/site";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad del sitio web de Bruno Jiménez. Sin cookies propias ni recopilación de datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    ...openGraphBase,
    title: "Privacidad | Bruno Jiménez",
    description: "Política de privacidad del sitio web de Bruno Jiménez.",
    url: "/privacidad",
  },
};

export default function Privacidad() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <EyebrowLabel className="whitespace-nowrap">Documento legal</EyebrowLabel>
              <span className="text-[var(--text-subtle)]">•</span>
              <EyebrowLabel className="whitespace-nowrap">Protocolo RFC / Privacidad</EyebrowLabel>
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-4 flex items-center gap-2 text-[var(--text-muted)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Última actualización: septiembre 2026
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-4">
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 lg:sticky lg:top-24">
                <div className="flex items-center justify-between pb-2">
                  <EyebrowLabel className="whitespace-nowrap">Índice de cláusulas</EyebrowLabel>
                </div>
                <nav className="flex flex-col gap-1">
                  <a
                    href="#compromiso"
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] p-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[0.6875rem] text-[var(--text-subtle)]">01.</span>
                    <span>Compromiso de privacidad</span>
                  </a>
                  <a
                    href="#cookies"
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] p-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[0.6875rem] text-[var(--text-subtle)]">02.</span>
                    <span>Cookies y rastreo</span>
                  </a>
                  <a
                    href="#alojamiento"
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] p-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[0.6875rem] text-[var(--text-subtle)]">03.</span>
                    <span>Alojamiento</span>
                  </a>
                  <a
                    href="#derechos"
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] p-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[0.6875rem] text-[var(--text-subtle)]">04.</span>
                    <span>Tus derechos</span>
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="lg:col-span-8 flex flex-col gap-6">
              {/* Section 1 */}
              <article
                id="compromiso"
                className="scroll-mt-24 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
              >
                <div className="flex items-center gap-3 pb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] font-mono text-xs font-semibold text-[var(--accent)]">
                    01
                  </span>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Compromiso de privacidad
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Este sitio web no recopila datos personales. No hay formularios de
                  contacto, cuentas de usuario ni suscripciones que requieran
                  entregar información personal.
                </p>
              </article>

              {/* Section 2 */}
              <article
                id="cookies"
                className="scroll-mt-24 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
              >
                <div className="flex items-center gap-3 pb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] font-mono text-xs font-semibold text-[var(--accent)]">
                    02
                  </span>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Cookies y rastreo
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Este sitio no instala cookies propias ni utiliza herramientas de
                  analítica que rastreen a personas individuales. La única forma de
                  contacto disponible es a través de enlaces externos como LinkedIn.
                </p>
              </article>

              {/* Section 3 */}
              <article
                id="alojamiento"
                className="scroll-mt-24 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
              >
                <div className="flex items-center gap-3 pb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] font-mono text-xs font-semibold text-[var(--accent)]">
                    03
                  </span>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Alojamiento
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  El sitio está alojado en Vercel. Como parte de su funcionamiento
                  normal, Vercel puede registrar información técnica como direcciones
                  IP en sus logs del servidor. Esta información se procesa según la{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
                  >
                    política de privacidad de Vercel
                  </a>
                  .
                </p>
              </article>

              {/* Section 4 */}
              <article
                id="derechos"
                className="scroll-mt-24 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
              >
                <div className="flex items-center gap-3 pb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] font-mono text-xs font-semibold text-[var(--accent)]">
                    04
                  </span>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Tus derechos
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Como este sitio no recopila datos personales, no hay información
                  que solicitar, modificar o eliminar. Si tienes alguna consulta
                  sobre privacidad, puedes contactarme a{" "}
                  <a
                    href="mailto:hola@brunojimenez.cl"
                    className="text-[var(--accent)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
                  >
                    hola@brunojimenez.cl
                  </a>{" "}
                  o a través de{" "}
                  <a
                    href="https://www.linkedin.com/in/brunojimenezchavez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </article>
            </main>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
