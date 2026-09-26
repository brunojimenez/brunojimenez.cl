import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/Section";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad del sitio web de Bruno Jiménez. Sin cookies propias ni recopilación de datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Privacidad | Bruno Jiménez",
    description: "Política de privacidad del sitio web de Bruno Jiménez.",
    url: "https://brunojimenez.cl/privacidad",
  },
};

export default function Privacidad() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container size="narrow">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Privacidad
          </h1>

          <div className="mt-8 space-y-6 text-[var(--text-secondary)]">
            <p className="leading-relaxed">
              Este sitio web no recopila datos personales. No hay formularios de
              contacto, cuentas de usuario ni suscripciones que requieran
              entregar información personal.
            </p>

            <h2 className="pt-4 text-lg font-semibold text-[var(--text-primary)]">
              Cookies y rastreo
            </h2>
            <p className="leading-relaxed">
              Este sitio no instala cookies propias ni utiliza herramientas de
              analítica que rastreen a personas individuales.
            </p>

            <h2 className="pt-4 text-lg font-semibold text-[var(--text-primary)]">
              Alojamiento
            </h2>
            <p className="leading-relaxed">
              El sitio está alojado en Vercel. Como parte de su funcionamiento
              normal, Vercel puede registrar información técnica como direcciones
              IP en sus logs del servidor. Esta información se procesa según la{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
              >
                política de privacidad de Vercel
              </a>
              .
            </p>

            <h2 className="pt-4 text-lg font-semibold text-[var(--text-primary)]">
              Tus derechos
            </h2>
            <p className="leading-relaxed">
              Como este sitio no recopila datos personales, no hay información
              que solicitar, modificar o eliminar. Si tienes alguna consulta
              sobre privacidad, puedes contactarme a{" "}
              <a
                href="mailto:hola@brunojimenez.cl"
                className="text-[var(--text-primary)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
              >
                hola@brunojimenez.cl
              </a>{" "}
              o a través de{" "}
              <a
                href="https://www.linkedin.com/in/brunojimenezchavez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] underline underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
              >
                LinkedIn
              </a>
              .
            </p>

            <p className="pt-8 text-sm text-[var(--text-muted)]">
              Última actualización: septiembre 2026
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
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
