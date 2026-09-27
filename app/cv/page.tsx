import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";
import Tag from "../components/Tag";

export const metadata: Metadata = {
  title: "Trayectoria",
  description:
    "Trayectoria profesional de Bruno Jiménez: 25 años en integración de sistemas, desde soporte técnico hasta arquitectura de microservicios con Spring Boot, Kafka y OpenShift.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Trayectoria | Bruno Jiménez",
    description:
      "25 años en integración de sistemas: de soporte técnico a microservicios.",
    url: "https://brunojimenez.cl/cv",
  },
};

interface TimelineItemProps {
  periodo: string;
  rol: string;
  descripcion: string;
  logros?: string[];
  tecnologias?: string[];
  isActive?: boolean;
}

function TimelineItem({
  periodo,
  rol,
  descripcion,
  logros,
  tecnologias,
  isActive = false,
}: TimelineItemProps) {
  return (
    <article className="relative pl-8 md:pl-10">
      {/* Timeline spine */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
      {/* Timeline dot */}
      <div className={`absolute -left-[5px] top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 ${
        isActive 
          ? "border-[var(--accent)] bg-[var(--accent)]" 
          : "border-[var(--border)] bg-[var(--surface-elevated)]"
      }`}>
        {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
      </div>

      <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`inline-flex rounded-[var(--radius-sm)] px-2 py-0.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] ${
            isActive 
              ? "bg-[var(--accent)] text-white" 
              : "bg-[var(--surface)] text-[var(--text-muted)]"
          }`}>
            {periodo}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {rol}
        </h3>
        <p className="mt-2 text-sm text-[var(--text-muted)]">{descripcion}</p>
        {logros && logros.length > 0 && (
          <ul className="mt-4 space-y-2">
            {logros.map((logro, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                <span className="text-[var(--text-muted)]">{logro}</span>
              </li>
            ))}
          </ul>
        )}
        {tecnologias && tecnologias.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tecnologias.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function CV() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section>
        <Container size="prose">
          <EyebrowLabel>Trayectoria profesional</EyebrowLabel>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Línea de tiempo & Experiencia
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            25 años haciendo que sistemas distintos se entiendan entre sí.
          </p>

          {/* Summary card */}
          <Card className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Resumen
            </h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Ingeniero de Ejecución en Informática (PUCV), Chile. Experiencia
              en integración empresarial y modernización de plataformas.
              Actualmente en WOM, desarrollando microservicios de integración
              para carrier billing sobre OpenShift con Spring Boot, MongoDB y
              Kafka. Antes trabajé en integración y modernización para
              Transbank, BCI, Cencosud, MINVU y JUNAEB, entre otros.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Timeline */}
      <Section variant="surface">
        <Container size="prose">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Experiencia
          </h2>

          <div className="space-y-6">
            <TimelineItem
              periodo="2020 – Presente"
              rol="Desarrollo de microservicios — WOM"
              descripcion="Desarrollo de microservicios de integración sobre OpenShift con Spring Boot, MongoDB y Kafka. Integración de sistemas de carrier billing y cobro con proveedores de contenido."
              logros={[
                "Integración con plataformas de contenido: Spotify, Boku, Netflix, FOX",
                "Desarrollo de APIs y servicios de mensajería para sistemas de cobro",
                "Modernización de componentes legacy hacia arquitectura de microservicios",
              ]}
              tecnologias={["Spring Boot", "Kafka", "MongoDB", "OpenShift"]}
              isActive
            />

            <TimelineItem
              periodo="2016 – 2020"
              rol="Integración empresarial"
              descripcion="Proyectos de integración y modernización para banca, retail y sector público."
              logros={[
                "Migración de plataformas Oracle WebLogic a Red Hat JBoss EAP para BCI",
                "Portal MINVU Conecta: integración de servicios ciudadanos",
                "Migración de portal JUNAEB a Liferay DXP",
                "Integraciones para Transbank, Cencosud, Tarjeta Cruz Verde",
              ]}
              tecnologias={["JBoss EAP", "Liferay", "Apache Camel", "REST"]}
            />

            <TimelineItem
              periodo="2013 – 2016"
              rol="SOA y BPM"
              descripcion="Especialización en arquitectura orientada a servicios y gestión de procesos de negocio."
              logros={[
                "Implementación de Liferay como portal empresarial",
                "Integración con Oracle BPM y Oracle Service Bus",
                "Desarrollo con Apache ServiceMix y Apache Camel",
              ]}
              tecnologias={["Apache Camel", "Oracle BPM", "ServiceMix"]}
            />

            <TimelineItem
              periodo="2010 – 2013"
              rol="Desarrollo de software"
              descripcion="Desarrollo de aplicaciones empresariales en múltiples tecnologías."
              logros={[
                "Desarrollo con .NET, Ruby on Rails y Java",
                "Implementación de lógica de negocio en PL/SQL",
                "Mantenimiento y evolución de sistemas existentes",
              ]}
              tecnologias={["Java", ".NET", "Ruby on Rails", "PL/SQL"]}
            />

            <TimelineItem
              periodo="2001 – 2006"
              rol="Soporte técnico y QA"
              descripcion="Inicio de carrera en soporte y aseguramiento de calidad."
              logros={[
                "Diagnóstico y resolución de problemas en sistemas en producción",
                "Documentación de procedimientos y casos de prueba",
                "Aprendizaje de qué falla en los sistemas y por qué",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Technical skills */}
      <Section>
        <Container size="prose">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Habilidades técnicas
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Backend y microservicios
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Java, Spring Boot, Spring Integration, Apache Camel
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Mensajería y eventos
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Apache Kafka, RabbitMQ, JMS
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Contenedores y orquestación
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                OpenShift, Kubernetes, Docker
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Bases de datos
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                MongoDB, Oracle, PostgreSQL, Redis
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Integración empresarial
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                REST, SOAP, Red Hat Fuse, Apache ServiceMix
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Portales y CMS
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Liferay DXP, Oracle BPM, SSO (CAS/LDAP)
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section variant="surface">
        <Container size="prose">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Formación
          </h2>

          <Card>
            <h3 className="font-semibold text-[var(--text-primary)]">
              Ingeniero de Ejecución en Informática
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Pontificia Universidad Católica de Valparaíso (PUCV)
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--text-subtle)]">2005 – 2015</p>
          </Card>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text-primary)]">
            Idiomas
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3">
              <span className="text-sm text-[var(--text-secondary)]">Español</span>
              <span className="shrink-0 whitespace-nowrap font-mono text-xs text-[var(--text-muted)]">Nativo</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3">
              <span className="text-sm text-[var(--text-secondary)]">Inglés</span>
              <span className="shrink-0 whitespace-nowrap font-mono text-xs text-[var(--text-muted)]">
                Lectura técnica
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="prose" className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            ¿Conversamos?
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Si tienes un proyecto de integración o modernización, me encantaría
            escucharte.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contacto" variant="accent">Contactar</Button>
            <Button
              href="https://www.linkedin.com/in/brunojimenezchavez"
              variant="secondary"
              external
            >
              Ver LinkedIn
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
