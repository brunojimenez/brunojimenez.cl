import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de integración y modernización de sistemas: migraciones de plataformas, portales empresariales y arquitectura de microservicios.",
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    title: "Proyectos | Bruno Jiménez",
    description:
      "Proyectos de integración y modernización de sistemas empresariales.",
    url: "https://brunojimenez.cl/proyectos",
  },
};

interface ProyectoCardProps {
  titulo: string;
  sector: string;
  descripcion: string;
  tecnologias: string[];
  resultado?: string;
}

function ProyectoCard({
  titulo,
  sector,
  descripcion,
  tecnologias,
  resultado,
}: ProyectoCardProps) {
  return (
    <Card>
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
        {sector}
      </p>
      <CardTitle>{titulo}</CardTitle>
      <CardDescription>{descripcion}</CardDescription>
      <div className="mt-4 flex flex-wrap gap-2">
        {tecnologias.map((tech) => (
          <span
            key={tech}
            className="rounded-[var(--radius-sm)] bg-[var(--surface)] px-2 py-1 text-xs text-[var(--text-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
      {resultado && (
        <p className="mt-4 text-sm font-medium text-[var(--text-primary)]">
          {resultado}
        </p>
      )}
    </Card>
  );
}

export default function Proyectos() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container size="narrow">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Proyectos
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Una selección de proyectos de integración y modernización en los que
            he participado.
          </p>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Migraciones de plataforma
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Proyectos de migración de servidores de aplicaciones y portales
            empresariales.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProyectoCard
              titulo="Migración a Red Hat JBoss EAP"
              sector="Banca"
              descripcion="Migración de aplicaciones críticas desde Oracle WebLogic a Red Hat JBoss EAP, incluyendo reconfiguración de datasources, seguridad y clustering."
              tecnologias={["JBoss EAP", "Oracle WebLogic", "Java EE"]}
              resultado="Reducción de costos de licenciamiento"
            />

            <ProyectoCard
              titulo="Portal de servicios ciudadanos"
              sector="Sector público"
              descripcion="Implementación de portal de servicios integrado con sistemas backend del ministerio, incluyendo SSO y formularios transaccionales."
              tecnologias={["Liferay", "Java", "REST", "SOAP"]}
            />

            <ProyectoCard
              titulo="Modernización de portal educacional"
              sector="Sector público"
              descripcion="Migración de portal desde Liferay 6 a Liferay DXP, incluyendo actualización de portlets y migración de contenido."
              tecnologias={["Liferay DXP", "Liferay 6", "Java"]}
            />

            {/* TODO: Agregar más proyectos cuando se confirme el contenido */}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Integración de sistemas
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Proyectos de integración entre sistemas heterogéneos.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProyectoCard
              titulo="Integración de plataforma de pagos"
              sector="Servicios financieros"
              descripcion="Diseño e implementación de capas de integración entre sistemas de procesamiento de pagos y plataformas de terceros usando Red Hat Fuse."
              tecnologias={["Red Hat Fuse", "Apache Camel", "REST", "SOAP"]}
            />

            <ProyectoCard
              titulo="Bus de servicios empresarial"
              sector="Retail"
              descripcion="Implementación de ESB para orquestar servicios entre sistemas de inventario, ventas y logística."
              tecnologias={["Apache ServiceMix", "Apache Camel", "JMS"]}
            />

            <ProyectoCard
              titulo="Integración de operador móvil"
              sector="Telecomunicaciones"
              descripcion="Desarrollo de microservicios de integración para conectar sistemas de negocio con plataformas de terceros, incluyendo proveedores de contenido."
              tecnologias={[
                "Spring Boot",
                "Kafka",
                "MongoDB",
                "OpenShift",
              ]}
            />

            {/* TODO: Agregar proyectos adicionales cuando se confirme permiso */}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Arquitectura y diseño
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Proyectos de diseño de arquitectura y patrones de integración.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardTitle as="h3">Anti-Corruption Layer</CardTitle>
              <CardDescription>
                Implementación del patrón Anti-Corruption Layer (Eric Evans,
                DDD) para aislar sistemas legacy de nuevas integraciones,
                permitiendo evolución independiente.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle as="h3">Event-Driven Architecture</CardTitle>
              <CardDescription>
                Diseño de arquitecturas basadas en eventos con Kafka para
                desacoplar sistemas y permitir procesamiento asíncrono.
              </CardDescription>
            </Card>

            <Card>
              <CardTitle as="h3">API Gateway</CardTitle>
              <CardDescription>
                Implementación de gateways de API para unificar acceso a
                servicios internos y externos con autenticación centralizada.
              </CardDescription>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            ¿Tienes un proyecto similar?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Si necesitas integrar sistemas o modernizar una plataforma,
            conversemos.
          </p>
          <Button href="/contacto" className="mt-8">
            Contactar
          </Button>

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
