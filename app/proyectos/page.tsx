import type { Metadata } from "next";
import { openGraphBase } from "../lib/site";
import Button from "../components/Button";
import Card, { CardTitle, CardDescription } from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";
import Tag from "../components/Tag";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos de integración y arquitectura: un sistema de cobro de suscripciones en producción en menos de 2 meses con 4 desarrolladores en paralelo, migraciones y portales empresariales.",
  alternates: {
    canonical: "/proyectos",
  },
  openGraph: {
    ...openGraphBase,
    title: "Proyectos | Bruno Jiménez",
    description:
      "Proyectos de integración y modernización de sistemas empresariales.",
    url: "/proyectos",
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

const suscripcionesStats = [
  { value: "< 2 meses", label: "del día cero a producción" },
  { value: "4", label: "desarrolladores en paralelo" },
  { value: "5", label: "componentes" },
  { value: "6+", label: "integraciones" },
];

const suscripcionesComponentes = [
  { nombre: "CRUD de suscripciones", detalle: "Alta, baja y modificación" },
  { nombre: "2 jobs de cobro", detalle: "Cuándo y cómo se cobra" },
  { nombre: "1 job de reintentos", detalle: "Recupera los cobros pendientes" },
  { nombre: "1 consumer central", detalle: "Toda la lógica de cobro" },
];

const flujoHorizontal = ["Suscripción", "Cobro", "Reintento", "Consumer", "Integraciones"];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
      <dt className="sr-only">{label}</dt>
      <dd className="text-2xl font-semibold tabular-nums tracking-tight text-[var(--text-primary)]">
        {value}
      </dd>
      <dd className="mt-1 text-sm text-[var(--text-muted)]">{label}</dd>
    </div>
  );
}

function FlechaAbajo({ etiqueta }: { etiqueta: string }) {
  return (
    <div className="flex flex-col items-center py-2 text-[var(--text-subtle)]" aria-hidden="true">
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.04em]">
        {etiqueta}
      </span>
      <svg className="mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
      </svg>
    </div>
  );
}

// Diagrama en HTML (no SVG) para que se reacomode solo en pantallas angostas.
function DiagramaDesarrolloParalelo() {
  return (
    <figure className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <EyebrowLabel>Desarrollo vertical</EyebrowLabel>
        <span className="text-xs text-[var(--text-subtle)]">cada dev, su pieza</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-3"
          >
            <p className="font-mono text-xs font-medium text-[var(--text-primary)]">
              Dev {n}
            </p>
            <p className="mt-1 text-xs leading-snug text-[var(--text-muted)]">
              Su parte del consumer + endpoint REST de pruebas privado
            </p>
          </div>
        ))}
      </div>

      <FlechaAbajo etiqueta="contratos" />

      <div className="rounded-[var(--radius-md)] border border-[var(--accent)] bg-[var(--accent-muted)] p-4 text-center">
        <p className="text-sm font-semibold text-[var(--text-primary)]">
          Cliente de orquestación
        </p>
        <p className="mt-1 text-xs text-[var(--text-muted)]">
          Se comunica con cada endpoint mediante contratos
        </p>
      </div>

      <FlechaAbajo etiqueta="datos de entrada" />

      <div className="flex items-center justify-between gap-4">
        <EyebrowLabel>Verificación horizontal</EyebrowLabel>
        <span className="text-xs text-[var(--text-subtle)]">el flujo entero</span>
      </div>
      <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[var(--text-secondary)]">
          {flujoHorizontal.map((etapa, i) => (
            <li key={etapa} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-[var(--text-subtle)]">
                  →
                </span>
              )}
              {etapa}
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-[var(--text-muted)]">
          Reviso cada etapa del proceso con datos reales, mientras el equipo
          sigue avanzando en su pieza.
        </p>
      </div>
      <figcaption className="mt-5 text-sm text-[var(--text-muted)]">
        Desarrollo paralelo por contratos con arneses de prueba privados:
        separar el desarrollo vertical de la verificación horizontal permitió
        avanzar en paralelo con cero conflictos de merge.
      </figcaption>
    </figure>
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

      {/* Casos destacados */}
      <Section variant="surface" id="cobro-suscripciones">
        <Container>
          <div className="max-w-3xl">
            <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
              Caso destacado · WOM
            </EyebrowLabel>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Un sistema de cobro de suscripciones, desde el día cero
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Arquitectura y orquestación de un sistema de cobro de
              suscripciones con más de seis integraciones. El reto: cuatro
              desarrolladores trabajando en paralelo sobre el mismo consumer, el
              componente más crítico del sistema. La respuesta fue de
              arquitectura.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {suscripcionesStats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </dl>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  El sistema
                </h3>
                <ul className="mt-3 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                  {suscripcionesComponentes.map((c) => (
                    <li key={c.nombre} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                      <span className="font-medium text-[var(--text-secondary)]">{c.nombre}</span>
                      <span className="text-right text-[var(--text-muted)]">{c.detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  La decisión
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  Cada desarrollador tuvo su propio endpoint REST de pruebas,
                  conectado por contrato a un cliente de orquestación. Yo
                  verificaba el flujo completo con datos de entrada, etapa por
                  etapa. Así cuatro personas avanzaron en paralelo, cada una con
                  total autonomía.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Lo que habilitó la IA
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  El desarrollo de los componentes se orquestó con asistencia de
                  IA. La arquitectura ya había abierto las costuras donde cada
                  parte podía construirse de forma segura, y eso permitió
                  paralelizar también el trabajo con los agentes.
                </p>
              </div>
            </div>
            <DiagramaDesarrolloParalelo />
          </div>
        </Container>
      </Section>

      <Section id="uat-cambio-contrato">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <div className="max-w-3xl">
              <EyebrowLabel className="whitespace-nowrap text-[var(--accent)]">
                Caso · WOM
              </EyebrowLabel>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Paso a UAT con el contrato cambiando debajo
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
                Dos componentes desplegados en el ambiente de UAT en tres días,
                atravesando tres cambios de firma (tres cambios de contrato) sin
                mover la fecha de la ventana. Prácticamente un refactor por día.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
                Las ventanas de UAT tienen fecha fija, y la cumplimos. La IA
                aceleró la escritura de cada refactor; mi aporte fue el
                criterio: detectar cada cambio de contrato, definir la
                estrategia y verificar el impacto en los sistemas consumidores.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-3">
              <Stat value="3" label="días" />
              <Stat value="3" label="cambios de contrato" />
              <Stat value="A tiempo" label="ventana de UAT cumplida" />
            </dl>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Migraciones y plataformas
          </h2>
          <p className="mb-8 text-[var(--text-muted)]">
            Migraciones de servidores de aplicaciones y portales, y evaluación
            de plataformas.
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
              titulo="Sitios de JUNAEB a Liferay DXP"
              sector="Sector público"
              descripcion="Migración de los sitios de JUNAEB a la plataforma Liferay DXP."
              tecnologias={["Liferay DXP", "Java"]}
            />

            <ProyectoCard
              titulo="Transbank: motor de reglas"
              sector="Servicios financieros"
              descripcion="Prueba de concepto de Red Hat Decision Manager (BRMS) para Transbank."
              tecnologias={["Red Hat Decision Manager", "BRMS"]}
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
              titulo="Plataforma de integración on premise y cloud"
              sector="Telecomunicaciones"
              descripcion="Microservicios de integración de WOM en dos entornos con la misma capacidad: OpenShift, Kafka y MongoDB on premise; EKS, SQS y MongoDB Atlas en AWS."
              tecnologias={["Spring Boot", "Kafka", "OpenShift", "AWS EKS", "AWS SQS", "MongoDB Atlas"]}
            />

            <ProyectoCard
              titulo="Carrier billing: Netflix, Spotify y Boku"
              sector="Telecomunicaciones"
              descripcion="Integración de WOM con plataformas de contenido para cobrar suscripciones en la boleta del celular. Primer proyecto en WOM, como externo vía SEnTRA."
              tecnologias={["Apache Camel", "Spring Boot", "REST"]}
            />

            <ProyectoCard
              titulo="MINVU Conecta"
              sector="Sector público"
              descripcion="App móvil del ministerio, de punta a punta: app Ionic/Cordova, MBaaS en Red Hat Mobile Application Platform y backend Fuse con servicios REST y SOAP. En el entorno de Red Hat Chile, como contratista de SEnTRA."
              tecnologias={["Red Hat Fuse", "Apache Camel", "RHMAP", "Ionic"]}
            />

            <ProyectoCard
              titulo="Tarjeta Cruz Verde: sitio de clientes"
              sector="Retail"
              descripcion="Sitio de clientes sobre Liferay 6.1, integrado con los sistemas de la tarjeta mediante Apache ServiceMix."
              tecnologias={["Liferay 6.1", "ServiceMix", "JPA", "Oracle"]}
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
                DDD) para que los sistemas existentes y las nuevas integraciones
                evolucionen de forma independiente.
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
                  ¿Tienes un proyecto de integración, modernización o innovación?
                </h2>
                <p className="mt-4 text-[var(--text-muted)]">
                  Conversemos sobre cómo llevarlo a producción.
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
