import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

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
        <Container size="narrow">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Cómo trabajo
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Mi enfoque para proyectos de integración y modernización de
            sistemas.
          </p>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Principios
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardTitle>Entender antes de construir</CardTitle>
              <CardDescription>
                Antes de escribir código, necesito entender el problema de
                negocio, los sistemas involucrados y las restricciones reales.
                Las integraciones que fallan suelen fallar por supuestos que
                nadie verificó.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Iteraciones cortas</CardTitle>
              <CardDescription>
                Prefiero entregar algo funcional rápido y ajustar, que diseñar
                durante meses y descubrir problemas tarde. En integración, los
                problemas reales aparecen cuando los sistemas se conectan.
              </CardDescription>
            </Card>

            <Card>
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
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Proceso típico
          </h2>

          <div className="mt-8 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-foreground)]">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Descubrimiento
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Entender qué sistemas existen, cómo se comunican hoy, qué
                  datos fluyen entre ellos y cuáles son los puntos de dolor.
                  Revisar documentación existente y hablar con quienes operan
                  los sistemas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-foreground)]">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Diseño de integración
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Definir la arquitectura de integración: qué patrones usar
                  (API, eventos, batch), cómo manejar errores, qué monitorear.
                  Documentar las decisiones y sus razones.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-foreground)]">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Implementación iterativa
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Construir en ciclos cortos, empezando por el camino más
                  crítico. Probar la integración real lo antes posible, no solo
                  con mocks. Ajustar el diseño según lo que se descubre.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-foreground)]">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Estabilización y entrega
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
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
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Qué esperar
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardTitle>Comunicación directa</CardTitle>
              <CardDescription>
                Prefiero conversaciones cortas y frecuentes a reuniones largas.
                Si algo no está claro o hay un problema, lo digo pronto.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Foco en producción</CardTitle>
              <CardDescription>
                El código que no está en producción no existe. Trabajo para que
                las integraciones funcionen en el ambiente real, no solo en
                desarrollo.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Transparencia técnica</CardTitle>
              <CardDescription>
                Explico las opciones técnicas y sus trade-offs. Las decisiones
                de arquitectura deben ser entendidas por el equipo, no solo por
                mí.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle>Compromiso con la calidad</CardTitle>
              <CardDescription>
                Tests, revisión de código, monitoreo. Las integraciones son
                críticas; si fallan, los procesos de negocio se detienen.
              </CardDescription>
            </Card>
          </div>

          {/* TODO: Agregar sección sobre uso de IA en desarrollo cuando se confirme (decisión D6) */}
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            ¿Quieres saber más?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Conversemos sobre tu proyecto y cómo podría ayudarte.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contacto">Contactar</Button>
            <Button href="/proyectos" variant="secondary">
              Ver proyectos
            </Button>
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
