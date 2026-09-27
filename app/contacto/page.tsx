import type { Metadata } from "next";
import Link from "next/link";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Bruno Jiménez para proyectos de integración de sistemas, modernización de plataformas y arquitectura de software.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Bruno Jiménez",
    description:
      "Contacta a Bruno Jiménez para proyectos de integración de sistemas y modernización de plataformas.",
    url: "https://brunojimenez.cl/contacto",
  },
};

export default function Contacto() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container size="prose">
          <EyebrowLabel className="whitespace-nowrap">Hablemos</EyebrowLabel>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            ¿Tienes un desafío de integración o arquitectura?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
            Si tienes sistemas que necesitan integrarse o modernizarse, me
            encantaría escuchar sobre tu proyecto.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* Email card */}
            <a
              href="mailto:hola@brunojimenez.cl"
              className="group flex flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 transition-colors hover:border-[var(--border-hover)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-[var(--text-primary)]">
                  Correo directo
                </h2>
                <p className="mt-1 font-mono text-sm text-[var(--accent)]">
                  hola@brunojimenez.cl
                </p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  Escríbeme para agendar una videollamada, revisar
                  especificaciones técnicas o coordinar una propuesta técnica
                  detallada.
                </p>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/brunojimenezchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 transition-colors hover:border-[var(--border-hover)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--surface)] text-[#0A66C2]">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-[var(--text-primary)]">
                  Perfil en LinkedIn
                </h2>
                <p className="mt-1 font-mono text-sm text-[var(--text-muted)]">
                  linkedin.com/in/brunojimenezchavez
                </p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  Conectemos profesionalmente, revisa recomendaciones de colegas
                  y el historial de proyectos donde he participado en banca,
                  retail y telecomunicaciones.
                </p>
              </div>
            </a>
          </div>

          <Card className="mt-12 bg-[var(--surface)]">
            <h2 className="font-semibold text-[var(--text-primary)]">
              ¿Qué proyectos me interesan?
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Empresas con sistemas en producción que necesitan integrarse o
                  modernizarse
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Proyectos de integración empresarial (APIs, eventos, colas)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  Migraciones de plataformas legacy a arquitecturas modernas
                </span>
              </li>
            </ul>
          </Card>

          <div className="mt-8">
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
