import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";

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

interface ExperienciaItemProps {
  periodo: string;
  rol: string;
  descripcion: string;
  logros?: string[];
}

function ExperienciaItem({
  periodo,
  rol,
  descripcion,
  logros,
}: ExperienciaItemProps) {
  return (
    <div className="border-l-2 border-[var(--border)] py-4 pl-6">
      <p className="text-sm font-medium text-[var(--text-muted)]">{periodo}</p>
      <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
        {rol}
      </h3>
      <p className="mt-2 text-[var(--text-secondary)]">{descripcion}</p>
      {logros && logros.length > 0 && (
        <ul className="mt-3 space-y-1">
          {logros.map((logro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--text-subtle)]" />
              <span className="text-[var(--text-secondary)]">{logro}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CV() {
  return (
    <div className="flex flex-col">
      {/* Cabecera */}
      <Section>
        <Container size="narrow">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Trayectoria
          </h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            25 años haciendo que sistemas distintos se entiendan entre sí.
          </p>

          {/* Resumen */}
          <Card className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Resumen
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Ingeniero de Ejecución en Informática (PUCV), Chile. Experiencia
              en integración empresarial y modernización de plataformas.
              Actualmente desarrollo microservicios de integración sobre
              OpenShift con Spring Boot, MongoDB y Kafka. Antes trabajé en
              integración y modernización para banca, retail y sector público.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Experiencia */}
      <Section variant="surface">
        <Container size="narrow">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Experiencia
          </h2>

          <div className="mt-8 space-y-2">
            <ExperienciaItem
              periodo="2020 – Presente"
              rol="Desarrollo de microservicios"
              descripcion="Desarrollo de microservicios de integración sobre OpenShift con Spring Boot, MongoDB y Kafka en un operador de telefonía móvil."
              logros={[
                "Integración de sistemas de negocio con plataformas de terceros",
                "Diseño e implementación de APIs y servicios de mensajería",
                "Modernización de componentes legacy hacia arquitectura de microservicios",
              ]}
            />

            <ExperienciaItem
              periodo="2016 – 2020"
              rol="Integración empresarial"
              descripcion="Proyectos de integración y modernización para banca, retail y sector público."
              logros={[
                "Migración de plataformas Oracle WebLogic a Red Hat JBoss EAP",
                "Integración de servicios SOAP con plataformas modernas",
                "Implementación de soluciones SOA y BPM",
              ]}
            />

            <ExperienciaItem
              periodo="2013 – 2016"
              rol="SOA y BPM"
              descripcion="Especialización en arquitectura orientada a servicios y gestión de procesos de negocio."
              logros={[
                "Implementación de Liferay como portal empresarial",
                "Integración con Oracle BPM y Oracle Service Bus",
                "Desarrollo con Apache ServiceMix y Apache Camel",
              ]}
            />

            <ExperienciaItem
              periodo="2010 – 2013"
              rol="Desarrollo de software"
              descripcion="Desarrollo de aplicaciones empresariales en múltiples tecnologías."
              logros={[
                "Desarrollo con .NET, Ruby on Rails y Java",
                "Implementación de lógica de negocio en PL/SQL",
                "Mantenimiento y evolución de sistemas existentes",
              ]}
            />

            <ExperienciaItem
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

          {/* TODO: Agregar experiencia detallada por empresa cuando se confirme el contenido */}
        </Container>
      </Section>

      {/* Habilidades técnicas */}
      <Section>
        <Container size="narrow">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Habilidades técnicas
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Backend y microservicios
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Java, Spring Boot, Spring Integration, Apache Camel
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Mensajería y eventos
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Apache Kafka, RabbitMQ, JMS
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Contenedores y orquestación
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                OpenShift, Kubernetes, Docker
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Bases de datos
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                MongoDB, Oracle, PostgreSQL, Redis
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Integración empresarial
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                REST, SOAP, Red Hat Fuse, Apache ServiceMix
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Portales y CMS
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Liferay DXP, Oracle BPM, SSO (CAS/LDAP)
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Formación */}
      <Section variant="surface">
        <Container size="narrow">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Formación
          </h2>

          <Card className="mt-8">
            <h3 className="font-semibold text-[var(--text-primary)]">
              Ingeniero de Ejecución en Informática
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Pontificia Universidad Católica de Valparaíso (PUCV)
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">2005 – 2015</p>
          </Card>

          {/* TODO: Agregar certificaciones cuando se confirmen */}

          <h3 className="mt-8 text-lg font-semibold text-[var(--text-primary)]">
            Idiomas
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-secondary)]">Español</span>
              <span className="text-sm text-[var(--text-muted)]">Nativo</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-secondary)]">Inglés</span>
              <span className="text-sm text-[var(--text-muted)]">
                Lectura técnica
              </span>
            </div>
            {/* TODO: Confirmar nivel de inglés */}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            ¿Conversamos?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Si tienes un proyecto de integración o modernización, me encantaría
            escucharte.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contacto">Contactar</Button>
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
