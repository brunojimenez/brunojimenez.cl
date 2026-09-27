import Button from "./components/Button";
import Card, { CardTitle, CardDescription, CardFooter } from "./components/Card";
import Container from "./components/Container";
import Section from "./components/Section";
import EyebrowLabel from "./components/EyebrowLabel";
import Tag from "./components/Tag";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="!pb-6">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Backend e integración de sistemas.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
              25 años haciendo que sistemas distintos se entiendan entre sí. Hoy
              desarrollo microservicios de integración sobre OpenShift con Spring
              Boot, MongoDB y Kafka. Antes, integración y modernización para
              banca, retail y sector público.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/proyectos" variant="accent">
                Ver proyectos realizados
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button href="/contacto" variant="secondary">
                Hablemos
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Credentials strip */}
      <Section variant="muted" className="!py-6">
        <Container>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-center sm:flex-row sm:gap-x-8 sm:gap-y-4">
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-2xl font-semibold tabular-nums text-[var(--text-primary)]">
                25
              </span>
              <span className="whitespace-nowrap text-sm text-[var(--text-muted)]">
                años de trayectoria
              </span>
            </div>
            <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Tag>Java</Tag>
              <Tag>Spring Boot</Tag>
              <Tag>Kafka</Tag>
              <Tag>OpenShift</Tag>
            </div>
            <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />
            <div className="text-sm text-[var(--text-muted)]">
              Ingeniero de Ejecución en Informática (PUCV)
            </div>
          </div>
        </Container>
      </Section>

      {/* What I do - 3 cards */}
      <Section>
        <Container>
          <div className="mb-10 max-w-xl">
            <EyebrowLabel className="whitespace-nowrap">Capacidades técnicas</EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Qué hago
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card hover>
              <CardTitle>Integración entre sistemas</CardTitle>
              <CardDescription>
                Conecto sistemas que no se hablan: APIs, eventos, colas y
                servicios sobre Spring Boot, Kafka y Apache Camel.
              </CardDescription>
              <CardFooter>
                Para empresas con varios sistemas críticos en producción.
              </CardFooter>
            </Card>

            <Card hover>
              <CardTitle>Modernización de plataformas legacy</CardTitle>
              <CardDescription>
                Migraciones como Oracle WebLogic → Red Hat JBoss EAP o Liferay 6
                → Liferay DXP, e integración de servicios SOAP con plataformas
                actuales.
              </CardDescription>
              <CardFooter>Para banca, retail y sector público.</CardFooter>
            </Card>

            <Card hover className="sm:col-span-2 lg:col-span-1">
              <CardTitle>Arquitectura e integración</CardTitle>
              <CardDescription>
                SOA, BPM, SSO (CAS/LDAP) y microservicios. Diseño, construcción,
                pruebas y seguimiento en producción.
              </CardDescription>
              <CardFooter>
                Para equipos que crecen y necesitan orden.
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">Contacto directo</EyebrowLabel>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                ¿Tienes sistemas que necesitan hablar entre sí?
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
