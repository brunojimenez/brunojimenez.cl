import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import Card, { CardTitle, CardDescription, CardFooter } from "./components/Card";
import Container from "./components/Container";
import Section from "./components/Section";
import EyebrowLabel from "./components/EyebrowLabel";
import Tag from "./components/Tag";

const credentials = [
  { value: "25", label: "años de trayectoria" },
  { value: "6", label: "años en WOM" },
  { value: "20+", label: "clientes en banca, retail, telecom y sector público" },
  { value: "2", label: "entornos: on premise y cloud" },
];

const clients = [
  "Transbank",
  "BCI",
  "Cencosud",
  "Cruz Verde",
  "Casa&Ideas",
  "MINVU",
  "JUNAEB",
  "Corfo",
  "WOM",
  "Entel",
  "Netflix",
  "Spotify",
  "Boku",
];

// Clientes de los primeros años: van al final y con menos peso visual.
const earlierClients = ["Grupo Santander", "Nestlé", "El Mercurio"];

const caseStats = [
  { value: "< 2 meses", label: "del día cero a producción" },
  { value: "4", label: "desarrolladores en paralelo" },
  { value: "6+", label: "integraciones" },
  { value: "0", label: "conflictos de merge" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="!pb-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/profile.webp"
                  alt=""
                  width={700}
                  height={942}
                  sizes="56px"
                  className="h-14 w-14 rounded-full border border-[var(--border)] object-cover object-top lg:hidden"
                />
                <EyebrowLabel className="whitespace-nowrap">
                  Bruno Jiménez · Rancagua, Chile
                </EyebrowLabel>
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Liderazgo técnico en backend e integración.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                25 años haciendo que sistemas distintos se entiendan entre sí. En
                WOM trabajo la plataforma de integración en dos entornos, On
                Premise (OpenShift) y Cloud (AWS), implementando nuevos procesos
                de desarrollo agéntico.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/proyectos" variant="accent">
                  Ver proyectos realizados
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
                <Button href="/contacto" variant="secondary">
                  Hablemos
                </Button>
              </div>
            </div>
            <Image
              src="/images/profile.webp"
              alt="Retrato de Bruno Jiménez"
              width={700}
              height={942}
              sizes="320px"
              className="hidden w-full rounded-[var(--radius-lg)] border border-[var(--border)] lg:block"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Credentials strip */}
      <Section variant="muted" className="!py-8">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
            {credentials.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-3xl font-semibold tabular-nums tracking-tight text-[var(--text-primary)]">
                  {item.value}
                </dd>
                <dd className="text-sm leading-snug text-[var(--text-muted)]">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Tag>Java</Tag>
              <Tag>Spring Boot</Tag>
              <Tag>Kafka</Tag>
              <Tag>Apache Camel</Tag>
              <Tag>OpenShift</Tag>
              <Tag>AWS EKS</Tag>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              Ingeniero de Ejecución en Informática (PUCV)
            </p>
          </div>
        </Container>
      </Section>

      {/* What I do - 3 cards */}
      <Section>
        <Container>
          <div className="mb-10 max-w-xl">
            <EyebrowLabel className="whitespace-nowrap">Capacidades</EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Qué hago
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card hover>
              <CardTitle>Integración y modernización</CardTitle>
              <CardDescription>
                Conecto sistemas a través de APIs, eventos, colas y servicios
                con Spring Boot, Kafka y Apache Camel. Modernizo plataformas
                completas: de Oracle WebLogic a JBoss EAP en BCI, o los sitios
                de JUNAEB a Liferay DXP.
              </CardDescription>
              <CardFooter>
                Para banca, retail, telecom y sector público.
              </CardFooter>
            </Card>

            <Card hover>
              <CardTitle>Liderazgo técnico</CardTitle>
              <CardDescription>
                Diseño arquitectura, estimo, desarrollo y superviso entregas y
                equipos externos. Mi experiencia con múltiples lenguajes,
                motores de bases de datos y plataformas me permite liderar tanto
                la modernización de sistemas existentes como proyectos de
                innovación.
              </CardDescription>
              <CardFooter>Con las manos en el código, por elección.</CardFooter>
            </Card>

            <Card hover className="sm:col-span-2 lg:col-span-1">
              <CardTitle>Desarrollo asistido por IA</CardTitle>
              <CardDescription>
                Documento cómo trabajamos (recetas por tipo de componente,
                prácticas y guardarraíles) para que los agentes de IA
                desarrollen alineados con nuestros estándares, y reviso que se
                cumplan.
              </CardDescription>
              <CardFooter>
                Primero el proceso, después la herramienta.
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Featured case */}
      <Section variant="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
                Caso destacado
              </EyebrowLabel>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Un sistema de cobro de suscripciones, desde el día cero
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
                CRUD de suscripciones, jobs de cobro y reintentos, y un consumer
                central con toda la lógica de cobro. Diseñé un esquema de
                desarrollo paralelo por contratos para que cuatro personas
                avanzaran a la vez sobre el mismo componente, con total
                autonomía.
              </p>
              <Link
                href="/proyectos#cobro-suscripciones"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                Ver el caso completo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {caseStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums tracking-tight text-[var(--text-primary)]">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Clients */}
      <Section className="!py-10">
        <Container>
          <EyebrowLabel className="whitespace-nowrap">
            Integraciones y proyectos para
          </EyebrowLabel>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium text-[var(--text-secondary)]">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
            {earlierClients.map((client) => (
              <li key={client} className="font-normal text-[var(--text-muted)]">
                {client}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">Contacto directo</EyebrowLabel>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                ¿Tienes un proyecto de integración, modernización o innovación?
              </h2>
              <p className="mt-4 text-[var(--text-muted)]">
                Escríbeme y conversemos sobre tu proyecto.
              </p>
              <Button href="/contacto" variant="accent" className="mt-8">
                Contactar
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
