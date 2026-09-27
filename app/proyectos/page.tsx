import type { Metadata } from "next";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";
import Tag from "../components/Tag";

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
    <Card hover className="flex flex-col">
      <div className="flex-1">
        <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">{sector}</EyebrowLabel>
        <CardTitle className="mt-2">{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tecnologias.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
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
        <Container>
          <div className="max-w-2xl">
            <EyebrowLabel>Casos de estudio</EyebrowLabel>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Proyectos e Integraciones
            </h1>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Una selección de proyectos de integración y modernización en los que
              he participado.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Migraciones de plataforma
          </h2>
          <p className="mb-8 text-[var(--text-muted)]">
            Proyectos de migración de servidores de aplicaciones y portales
            empresariales.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProyectoCard
              titulo="Migración BCI a Red Hat JBoss EAP"
              sector="Banca"
              descripcion="Migración de aplicaciones críticas desde Oracle WebLogic a Red Hat JBoss EAP, incluyendo reconfiguración de datasources, seguridad y clustering."
              tecnologias={["JBoss EAP", "Oracle WebLogic", "Java EE"]}
              resultado="Reducción de costos de licenciamiento"
            />

            <ProyectoCard
              titulo="MINVU Conecta"
              sector="Sector público"
              descripcion="Portal de servicios ciudadanos integrado con sistemas backend del ministerio, incluyendo SSO y formularios transaccionales."
              tecnologias={["Liferay", "Java", "REST", "SOAP"]}
            />

            <ProyectoCard
              titulo="Portal JUNAEB"
              sector="Sector público"
              descripcion="Migración de portal desde Liferay 6 a Liferay DXP, incluyendo actualización de portlets y migración de contenido."
              tecnologias={["Liferay DXP", "Liferay 6", "Java"]}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Integración de sistemas
          </h2>
          <p className="mb-8 text-[var(--text-muted)]">
            Proyectos de integración entre sistemas heterogéneos.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <ProyectoCard
              titulo="Carrier billing WOM"
              sector="Telecomunicaciones"
              descripcion="Integración de sistemas de carrier billing con proveedores de contenido digital. Desarrollo de microservicios para gestión de suscripciones y cobros."
              tecnologias={["Spring Boot", "Kafka", "MongoDB", "OpenShift"]}
            />

            <ProyectoCard
              titulo="Integraciones Spotify, Netflix, Boku"
              sector="Telecomunicaciones"
              descripcion="Desarrollo de capas de integración entre WOM y plataformas de contenido para suscripciones y pagos vía factura telefónica."
              tecnologias={["Spring Boot", "REST", "Kafka", "MongoDB"]}
            />

            <ProyectoCard
              titulo="Integración Transbank"
              sector="Servicios financieros"
              descripcion="Diseño e implementación de capas de integración entre sistemas de procesamiento de pagos y plataformas de comercio usando Red Hat Fuse."
              tecnologias={["Red Hat Fuse", "Apache Camel", "REST", "SOAP"]}
            />

            <ProyectoCard
              titulo="Integración Cencosud"
              sector="Retail"
              descripcion="Implementación de ESB para orquestar servicios entre sistemas de inventario, ventas y logística."
              tecnologias={["Apache ServiceMix", "Apache Camel", "JMS"]}
            />
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Arquitectura y diseño
          </h2>
          <p className="mb-8 text-[var(--text-muted)]">
            Proyectos de diseño de arquitectura y patrones de integración.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card hover>
              <CardTitle as="h3">Anti-Corruption Layer</CardTitle>
              <CardDescription>
                Implementación del patrón Anti-Corruption Layer (Eric Evans,
                DDD) para aislar sistemas legacy de nuevas integraciones,
                permitiendo evolución independiente.
              </CardDescription>
            </Card>

            <Card hover>
              <CardTitle as="h3">Event-Driven Architecture</CardTitle>
              <CardDescription>
                Diseño de arquitecturas basadas en eventos con Kafka para
                desacoplar sistemas y permitir procesamiento asíncrono.
              </CardDescription>
            </Card>

            <Card hover>
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
        <Container>
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-8 sm:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 min-w-0 text-center md:text-left">
                <EyebrowLabel className="text-[var(--accent)]">¿Tienes un proyecto similar?</EyebrowLabel>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  ¿Tienes sistemas que necesitan hablar entre sí?
                </h2>
                <p className="mt-4 text-[var(--text-muted)]">
                  Si necesitas integrar sistemas o modernizar una plataforma,
                  conversemos.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 sm:flex-row">
                <Button href="/contacto" variant="accent">Contactar</Button>
                <Button
                  href="https://www.linkedin.com/in/brunojimenezchavez"
                  variant="secondary"
                  external
                >
                  Ver LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
