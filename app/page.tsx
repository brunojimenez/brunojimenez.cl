import Button from "./components/Button";
import Card, { CardTitle, CardDescription, CardFooter } from "./components/Card";
import Container from "./components/Container";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section>
        <Container size="default" className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Bruno Jiménez
          </h1>
          <p className="mt-2 text-lg font-medium text-[var(--text-secondary)]">
            Backend e integración de sistemas
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            25 años haciendo que sistemas distintos se entiendan entre sí. Hoy
            desarrollo microservicios de integración sobre OpenShift con Spring
            Boot, MongoDB y Kafka. Antes, integración y modernización para
            banca, retail y sector público.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contacto">Hablemos</Button>
            <Button
              href="https://www.linkedin.com/in/brunojimenezchavez"
              variant="secondary"
              external
            >
              Ver LinkedIn
            </Button>
          </div>
        </Container>
      </Section>

      {/* Franja de credenciales */}
      <Section variant="muted" className="!py-8">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[var(--text-primary)]">
                25
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                años de trayectoria
              </span>
            </div>
            <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />
            <div className="text-sm text-[var(--text-secondary)]">
              Java · Spring Boot · Kafka · OpenShift
            </div>
            <div className="hidden h-4 w-px bg-[var(--border)] sm:block" />
            <div className="text-sm text-[var(--text-secondary)]">
              Ingeniero de Ejecución en Informática (PUCV)
            </div>
          </div>
        </Container>
      </Section>

      {/* Qué hago - 3 tarjetas */}
      <Section>
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Qué hago
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardTitle>Integración entre sistemas</CardTitle>
              <CardDescription>
                Conecto sistemas que no se hablan: APIs, eventos, colas y
                servicios sobre Spring Boot, Kafka y Apache Camel.
              </CardDescription>
              <CardFooter>
                Para empresas con varios sistemas críticos en producción.
              </CardFooter>
            </Card>

            <Card>
              <CardTitle>Modernización de plataformas legacy</CardTitle>
              <CardDescription>
                Migraciones como Oracle WebLogic → Red Hat JBoss EAP o Liferay 6
                → Liferay DXP, e integración de servicios SOAP con plataformas
                actuales.
              </CardDescription>
              <CardFooter>Para banca, retail y sector público.</CardFooter>
            </Card>

            <Card className="sm:col-span-2 lg:col-span-1">
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

      {/* CTA de cierre */}
      <Section variant="surface">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            ¿Tienes sistemas que necesitan hablar entre sí?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Escríbeme y conversemos sobre tu proyecto.
          </p>
          <Button href="/contacto" className="mt-8">
            Contactar
          </Button>
        </Container>
      </Section>
    </div>
  );
}
