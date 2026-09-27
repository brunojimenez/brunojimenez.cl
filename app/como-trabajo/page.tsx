import type { Metadata } from "next";
import { openGraphBase } from "../lib/site";
import Link from "next/link";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription, CardFooter } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Cómo trabaja Bruno Jiménez: reducción progresiva de incertidumbre, arquetipos documentados como recetas y un marco de desarrollo asistido por IA con guardarraíles.",
  alternates: {
    canonical: "/como-trabajo",
  },
  openGraph: {
    ...openGraphBase,
    title: "Cómo trabajo | Bruno Jiménez",
    description:
      "Reducción progresiva de incertidumbre, recetas por tipo de componente y desarrollo asistido por IA.",
    url: "/como-trabajo",
  },
};

const metodologia = [
  {
    titulo: "Punto de partida",
    detalle: "Información inicial acotada y muchas preguntas abiertas, como en la mayoría de los proyectos reales.",
  },
  {
    titulo: "Método",
    detalle: "Reducir la incertidumbre de forma progresiva, en paralelo con el desarrollo.",
  },
  {
    titulo: "Criterio de avance",
    detalle: "Cada entrega es un componente maduro y resuelto.",
  },
];

const arquetipos = [
  {
    sigla: "ACL",
    nombre: "Anti-Corruption Layer",
    detalle: "Traduce entre un sistema externo y el propio, para que cada modelo evolucione de forma independiente.",
  },
  {
    sigla: "SRV",
    nombre: "Servicio de dominio",
    detalle: "La operación que la plataforma expone hacia adentro.",
  },
  {
    sigla: "Consumer",
    nombre: "Consumidor de eventos",
    detalle: "Reacciona a los eventos del negocio en el momento en que ocurren.",
  },
  {
    sigla: "Job",
    nombre: "Proceso programado",
    detalle: "Lo que tiene que pasar a cierta hora: cobrar, reintentar, conciliar.",
  },
];

const marcoIA = [
  {
    titulo: "Skills que se activan por contexto",
    detalle: "El ciclo de desarrollo codificado en etapas: desde el workspace vacío y el análisis inicial hasta la entrega a QA y el RFC de cierre.",
  },
  {
    titulo: "Contexto de varias fuentes",
    detalle: "El agente consulta directamente los sistemas donde vive la información: tickets, datos y contratos de API.",
  },
  {
    titulo: "Memoria de mesa de trabajo",
    detalle: "Cada historia de usuario guarda su spec, contrato, acuerdos y pendientes, para retomar cualquier tarea con el contexto completo.",
  },
];

const estadoIA = [
  "Agentic Coding: los agentes desarrollan alineados con las recetas y estándares del equipo.",
  "Standard reviewer: aseguro que todo lo que se produce, con o sin IA, cumpla esos estándares.",
  "Adopción por demostración: cada equipo lo incorpora cuando ve el valor en su propio trabajo.",
];

export default function ComoTrabajo() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container>
          <div className="max-w-3xl">
          <EyebrowLabel className="whitespace-nowrap">Metodología</EyebrowLabel>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Cómo trabajo
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
            Tres cosas que uso a diario en el área de Integración de WOM: una
            forma de partir con poca información, recetas por tipo de
            componente y un marco para que la IA desarrolle contra esos
            estándares.
          </p>
          </div>
        </Container>
      </Section>

      {/* 1. Metodología */}
      <Section variant="surface">
        <Container>
          <div className="max-w-3xl">
            <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
              01 · Metodología
            </EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Reducción progresiva de incertidumbre
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Los proyectos suelen partir con información incompleta. Mi enfoque
              es avanzar desde el primer día e ir reduciendo la incertidumbre a
              medida que el desarrollo progresa. Es una línea del área de
              Integración de WOM que también es mía: impulsar las ideas y
              partir, aunque todavía falten respuestas.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {metodologia.map((item) => (
              <Card key={item.titulo}>
                <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
                  {item.titulo}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.detalle}
                </dd>
              </Card>
            ))}
          </dl>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            Cada iteración entrega un componente maduro y listo para producción,
            mientras el alcance total sigue tomando forma.
          </p>
        </Container>
      </Section>

      {/* 2. Arquetipos */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
              02 · Estándares
            </EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Arquetipos como recetas, más allá del template
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Cada tipo de componente tiene una receta canónica: cómo se
              implementa, con qué buenas prácticas, logging, observabilidad y
              journaling. Una receta se entiende y se adapta a cada caso. Cuatro
              tipos, en on premise y en cloud: ocho recetas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arquetipos.map((a) => (
              <Card key={a.sigla} hover>
                <p className="font-mono text-sm font-semibold text-[var(--accent)]">
                  {a.sigla}
                </p>
                <CardTitle className="mt-1 !text-base">{a.nombre}</CardTitle>
                <CardDescription>{a.detalle}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. IA */}
      <Section variant="surface">
        <Container>
          <div className="max-w-3xl">
            <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
              03 · Desarrollo asistido por IA
            </EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Primero el proceso, después la herramienta
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Primero documenté cómo trabajamos. Después codifiqué ese marco
              para que los agentes de IA desarrollen alineados con nuestros
              estándares.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="grid gap-4">
              {marcoIA.map((item) => (
                <Card key={item.titulo}>
                  <CardTitle className="!text-base">{item.titulo}</CardTitle>
                  <CardDescription>{item.detalle}</CardDescription>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <blockquote className="rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--accent-muted)] p-6 sm:p-8">
                <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--accent)]">
                  Guardarraíles
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--text-primary)]">
                  Acotar la incertidumbre sin detener el desarrollo.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Cuando una definición llega incompleta, el agente identifica
                  los puntos abiertos y los hace explícitos en vez de suponer
                  reglas de negocio. Así se reduce la alucinación y el proceso
                  sigue avanzando mientras esos puntos se resuelven.
                </p>
              </blockquote>

              <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
                <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-[var(--text-muted)]">
                  Cómo se aplica
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                  {estadoIA.map((linea) => (
                    <li key={linea} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{linea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                  datos fluyen entre ellos y dónde están las oportunidades de
                  mejora.
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
                  crítico. Validar la integración real desde temprano y ajustar
                  el diseño con lo que se aprende.
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
            {/* Destacado con el mismo estilo que el bloque de guardarraíles */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--accent-muted)] p-6 sm:col-span-2 sm:p-8">
              <h3 className="text-xl font-semibold leading-snug tracking-tight text-[var(--text-primary)]">
                Apoyo permanente al negocio
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Todo mi trabajo está orientado a acompañar los objetivos del
                negocio, con la flexibilidad necesaria para que se cumplan en
                tiempo y forma.
              </p>
            </div>

            <Card hover>
              <CardTitle>Comunicación directa</CardTitle>
              <CardDescription>
                Conversaciones cortas y frecuentes. Levanto alertas temprano
                para que las decisiones se tomen a tiempo.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Foco en producción</CardTitle>
              <CardDescription>
                Mi objetivo es que cada solución funcione en producción, en el
                ambiente real y con datos reales.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Transparencia técnica</CardTitle>
              <CardDescription>
                Explico las opciones técnicas y sus trade-offs. Las decisiones
                de arquitectura se comparten y las entiende todo el equipo.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle>Compromiso con la calidad</CardTitle>
              <CardDescription>
                Tests, revisión de código, monitoreo. Las integraciones
                sostienen procesos de negocio críticos, y se construyen con ese
                estándar.
              </CardDescription>
            </Card>

            <Card hover className="sm:col-span-2">
              <CardTitle>Conocimiento compartido</CardTitle>
              <CardDescription>
                Orientación, capacitación y documentación para que el equipo
                entienda a fondo las soluciones y las técnicas detrás de ellas.
                El conocimiento está para compartirlo, y facilitarlo es parte de
                mi esencia como profesional.
              </CardDescription>
              <CardFooter>Cero egoísmo intelectual.</CardFooter>
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
