import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Metodología de trabajo de Bruno Jiménez: enfoque en integración de sistemas, colaboración con equipos y entrega iterativa.",
  alternates: {
    canonical: "/como-trabajo",
  },
  openGraph: {
    title: "Cómo trabajo | Bruno Jiménez",
    description:
      "Metodología de trabajo en proyectos de integración y modernización.",
    url: "https://brunojimenez.cl/como-trabajo",
  },
};

export default function ComoTrabajo() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container size="prose">
          <EyebrowLabel className="whitespace-nowrap">Metodología</EyebrowLabel>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Cómo trabajo
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Mi enfoque para proyectos de integración y modernización de
            sistemas.
          </p>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Principios
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card hover>
              <CardTitle>Entender antes de construir</CardTitle>
              <CardDescription>
                Antes de escribir código, necesito entender el problema de
                negocio, los sistemas involucrados y las restricciones reales.
                Las integraciones que fallan suelen fallar por supuestos que
                nadie verificó.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Iteraciones cortas</CardTitle>
              <CardDescription>
                Prefiero entregar algo funcional rápido y ajustar, que diseñar
                durante meses y descubrir problemas tarde. En integración, los
                problemas reales aparecen cuando los sistemas se conectan.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Documentar lo que importa</CardTitle>
              <CardDescription>
                Contratos de API, decisiones de arquitectura y configuración de
                ambientes. No documentar todo, pero sí lo que alguien va a
                necesitar cuando yo no esté.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="prose">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Proceso típico
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] font-mono text-sm font-bold text-white">
                01
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Descubrimiento
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Entender qué sistemas existen, cómo se comunican hoy, qué
                  datos fluyen entre ellos y cuáles son los puntos de dolor.
                  Revisar documentación existente y hablar con quienes operan
                  los sistemas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] font-mono text-sm font-bold text-white">
                02
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Diseño de integración
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Definir la arquitectura de integración: qué patrones usar
                  (API, eventos, batch), cómo manejar errores, qué monitorear.
                  Documentar las decisiones y sus razones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] font-mono text-sm font-bold text-white">
                03
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Implementación iterativa
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Construir en ciclos cortos, empezando por el camino más
                  crítico. Probar la integración real lo antes posible, no solo
                  con mocks. Ajustar el diseño según lo que se descubre.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent)] font-mono text-sm font-bold text-white">
                04
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Estabilización y entrega
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Pruebas de carga, manejo de errores, monitoreo y alertas.
                  Documentación de operación. Transferencia de conocimiento al
                  equipo que va a mantener la integración.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Qué esperar
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card hover>
              <CardTitle>Comunicación directa</CardTitle>
              <CardDescription>
                Prefiero conversaciones cortas y frecuentes a reuniones largas.
                Si algo no está claro o hay un problema, lo digo pronto.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Foco en producción</CardTitle>
              <CardDescription>
                El código que no está en producción no existe. Trabajo para que
                las integraciones funcionen en el ambiente real, no solo en
                desarrollo.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Transparencia técnica</CardTitle>
              <CardDescription>
                Explico las opciones técnicas y sus trade-offs. Las decisiones
                de arquitectura deben ser entendidas por el equipo, no solo por
                mí.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Compromiso con la calidad</CardTitle>
              <CardDescription>
                Tests, revisión de código, monitoreo. Las integraciones son
                críticas; si fallan, los procesos de negocio se detienen.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="prose" className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            ¿Quieres saber más?
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Conversemos sobre tu proyecto y cómo podría ayudarte.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contacto" variant="accent">Contactar</Button>
            <Button href="/proyectos" variant="secondary">
              Ver proyectos
            </Button>
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
