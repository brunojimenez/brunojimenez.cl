import type { Metadata } from "next";
import { openGraphBase } from "../lib/site";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Section from "../components/Section";
import ParallaxHeader from "../components/ParallaxHeader";
import EyebrowLabel from "../components/EyebrowLabel";
import Tag from "../components/Tag";
import EraSidebar, { type Era } from "../components/EraSidebar";
import TracingBeam from "../components/TracingBeam";

export const metadata: Metadata = {
  title: "Trayectoria",
  description:
    "Trayectoria profesional de Bruno Jiménez: 25 años en integración de sistemas, desde soporte técnico hasta arquitectura de microservicios con Spring Boot, Kafka y OpenShift.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    ...openGraphBase,
    title: "Trayectoria | Bruno Jiménez",
    description:
      "25 años en integración de sistemas: de soporte técnico a microservicios.",
    url: "/cv",
  },
};

interface TimelineItemProps {
  id?: string;
  periodo: string;
  rol: string;
  descripcion: string;
  logros?: string[];
  tecnologias?: string[];
  isActive?: boolean;
}

function TimelineItem({
  id,
  periodo,
  rol,
  descripcion,
  logros,
  tecnologias,
  isActive = false,
}: TimelineItemProps) {
  return (
    <article id={id} data-beam-stop className="relative scroll-mt-24 pl-8 md:pl-10">
      {/* Timeline spine */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
      {/* Timeline dot */}
      <div className={`beam-dot absolute -left-[5px] top-1 z-[2] flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 ${
        isActive 
          ? "border-[var(--accent)] bg-[var(--accent)]" 
          : "border-[var(--border)] bg-[var(--surface-elevated)]"
      }`}>
        {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
      </div>

      <div className="spotlight rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
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

const aportes = [
  "Cuatro tipos de componente (ACL, servicio de dominio, consumer y job) documentados como recetas canónicas, en on premise y en cloud, con logging, observabilidad y journaling incluidos.",
  "Ciclo de desarrollo codificado como skills que se activan por contexto: workspace, análisis inicial, desarrollo, entrega a QA y RFC de cierre.",
  "Guardarraíles para agentes de IA que acotan la incertidumbre: identifican los puntos abiertos, reducen la alucinación de reglas de negocio y mantienen el avance ante definiciones incompletas.",
  "Esquema de desarrollo paralelo por contratos, con endpoints de prueba privados por desarrollador y verificación horizontal del flujo completo.",
  "Metodología de reducción progresiva de incertidumbre para proyectos que parten con información incompleta.",
];

const formacionTemprana = [
  {
    que: "Armado y mantención de computadores personales; instalación de redes de trabajo en grupo y de redes LAN bajo Windows NT Server",
    donde: "Instituto Superior de Electrónica Gamma, cursos SENCE",
    anio: "2000",
  },
  {
    que: "Técnicas computacionales para la productividad empresarial (DOS, WordPerfect y Lotus 123)",
    donde: "Instituto de Capacitación Difusión",
    anio: "1994",
  },
];

const habilidades = [
  { titulo: "Backend y microservicios", detalle: "Java, Spring Boot, Spring Integration, Apache Camel" },
  { titulo: "Mensajería y eventos", detalle: "Apache Kafka, AWS SQS, RabbitMQ, JMS" },
  { titulo: "Contenedores y orquestación", detalle: "OpenShift, Amazon EKS (AWS), Kubernetes, Docker" },
  { titulo: "Bases de datos", detalle: "Oracle, SQL Server, DB2, PostgreSQL, MongoDB, Redis; PL/SQL" },
  { titulo: "Integración empresarial", detalle: "REST, SOAP, Red Hat Fuse, Apache ServiceMix" },
  { titulo: "Portales y CMS", detalle: "Liferay DXP, Oracle BPM, SSO (CAS/LDAP)" },
];

const titulos = [
  {
    titulo: "Ingeniero de Ejecución en Informática",
    institucion: "Pontificia Universidad Católica de Valparaíso (PUCV)",
    anio: "2015",
  },
  {
    titulo: "Técnico Superior en Electrónica (egresado)",
    institucion: "Instituto Superior de Electrónica Gamma",
    anio: "2003",
  },
  {
    titulo: "Técnico Informático de Nivel Medio",
    institucion:
      "Escuela Industrial La Gratitud Nacional (Salesianos Alameda), especialidad Programación: COBOL y Pascal",
    anio: "1998 – 2001",
  },
];

const idiomas = [
  { nombre: "Español", nivel: "Nativo" },
  { nombre: "Inglés", nivel: "Competencia profesional de trabajo" },
];

const eras: Era[] = [
  { id: "era-2020", periodo: "2020 — Hoy", etiqueta: "Microservicios" },
  { id: "era-2016", periodo: "2016 — 2020", etiqueta: "Integración" },
  { id: "era-2013", periodo: "2013 — 2016", etiqueta: "SOA y BPM" },
  { id: "era-2010", periodo: "2010 — 2013", etiqueta: "Desarrollo" },
  { id: "era-2001", periodo: "2001 — 2010", etiqueta: "Soporte y QA" },
];

const especialidades = [
  "Spring Boot",
  "Apache Camel",
  "Kafka",
  "OpenShift",
  "AWS EKS",
  "AWS SQS",
  "MongoDB",
  "JBoss EAP",
  "Carrier Billing",
  "SOAP / REST",
  "Agentic Coding",
];

export default function CV() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <ParallaxHeader diseno="flujos" className="py-14 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
            <div>
              <EyebrowLabel className="whitespace-nowrap">Trayectoria profesional</EyebrowLabel>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Línea de tiempo & Experiencia
              </h1>
              <p className="mt-4 text-lg text-[var(--text-muted)]">
                25 años haciendo que sistemas distintos se entiendan entre sí.
              </p>
            </div>

            {/* Summary card */}
            <Card>
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                Resumen
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Ingeniero de Ejecución en Informática (PUCV), Chile. Experiencia
                en integración empresarial, modernización de plataformas y nuevos
                desarrollos backend. Actualmente en WOM, con liderazgo técnico en
                el área de Integración: microservicios sobre OpenShift, Kafka y
                MongoDB on premise, y sobre EKS, SQS y MongoDB Atlas en AWS. Antes
                trabajé en integración y modernización para Transbank, BCI,
                Cencosud, MINVU y JUNAEB, entre otros.
              </p>
            </Card>
          </div>
        </Container>
      </ParallaxHeader>

      {/* Timeline */}
      <Section variant="surface">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Experiencia
          </h2>

          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <EraSidebar
              eras={eras}
              filosofia="Primero el proceso, después la herramienta."
              especialidades={especialidades}
            />

            <TracingBeam className="space-y-6">
              <TimelineItem
                id="era-2020"
                periodo="2020 – Presente"
                rol="Backend e integración, liderazgo técnico — WOM"
                descripcion="Microservicios de integración en dos entornos: OpenShift, Kafka y MongoDB on premise; EKS, SQS y MongoDB Atlas en AWS. Liderazgo técnico, con las manos en el código."
                logros={[
                  "Sistema de cobro de suscripciones desde el día cero: en producción en menos de 2 meses, con 4 desarrolladores en paralelo",
                  "Estimaciones, supervisión de entregas e inducción de equipos externos",
                  "Estándares de Agentic Coding para el área de Integración, con rol de standard reviewer",
                  "Primera etapa, como externo vía SEnTRA: integración de carrier billing con Netflix, Spotify, Boku y FOX (Apache Camel sobre Spring Boot)",
                  "Modernización de componentes existentes hacia arquitectura de microservicios",
                ]}
                tecnologias={["Spring Boot", "Apache Camel", "Kafka", "OpenShift", "AWS EKS", "MongoDB"]}
                isActive
              />

              <TimelineItem
                id="era-2016"
                periodo="2019 – 2020"
                rol="Ingeniero de integración — SEnTRA"
                descripcion="Integración de servicios de media y telecomunicaciones."
                logros={[
                  "Integración de servicios de WOM, Netflix y FOX con Spring Boot, Apache Camel y OpenShift",
                ]}
                tecnologias={["Spring Boot", "Apache Camel", "OpenShift"]}
              />

              <TimelineItem
                periodo="2018"
                rol="Liferay Development Engineer — JUNAEB"
                descripcion="Migración de los sitios de JUNAEB a la plataforma Liferay DXP."
                tecnologias={["Liferay DXP", "Java"]}
              />

              <TimelineItem
                periodo="2016 – 2018"
                rol="Ingeniero de integración — SEnTRA"
                descripcion="Integración y modernización para banca, telecomunicaciones y sector público, como consultora de integración."
                logros={[
                  "BCI: migración de Oracle WebLogic a Red Hat JBoss EAP",
                  "MINVU Conecta: app móvil de punta a punta con MBaaS en Red Hat Mobile Application Platform y backend Fuse (SwitchYard, Camel), en el entorno de Red Hat Chile",
                  "Transbank: prueba de concepto de Red Hat Decision Manager (BRMS)",
                  "Entel: assessment de arquitectura J2EE",
                  "SSO con OpenLDAP y CAS, e intranet en Liferay 6.2",
                ]}
                tecnologias={["JBoss EAP", "Red Hat Fuse", "Apache Camel", "Liferay"]}
              />

              <TimelineItem
                id="era-2013"
                periodo="2013 – 2016"
                rol="Consultoría SOA, BPM e integración — Tixtus, Indra, PAD Soluciones"
                descripcion="Entrada al mundo de la arquitectura orientada a servicios, procesos de negocio y portales."
                logros={[
                  "Solventa: modelamiento y automatización de procesos con Oracle BPM 12c y Oracle Service Bus",
                  "Tarjeta Cruz Verde: sitio de clientes con Liferay 6.1 y Apache ServiceMix",
                  "Casa&Ideas: portal y e-commerce sobre Liferay 6.1, con sitio de cliente integrado por SOAP",
                  "Cencosud: sistema de post venta web (Struts, Hibernate, Oracle)",
                  "Tastets: single sign-on con servicios SOAP y REST",
                  "Corfo: análisis de integración de gestión municipal con ServiceMix",
                ]}
                tecnologias={["Oracle BPM", "Oracle Service Bus", "Liferay", "ServiceMix"]}
              />

              <TimelineItem
                id="era-2010"
                periodo="2013"
                rol="Desarrollador freelance — Neogística"
                descripcion="Mantención de un sistema interno en PHP y MySQL, con servicios REST y procesos batch."
                tecnologias={["PHP", "MySQL", "REST"]}
              />

              <TimelineItem
                periodo="2012 – 2013"
                rol="Desarrollador PL/SQL — NeoSoft"
                descripcion="Un año dedicado por completo a PL/SQL, sobre tres motores de base de datos distintos."
                logros={[
                  "Mantención y evolución del SIGIR, sistema generador de informes regulatorios",
                  "PL/SQL sobre DB2 (AS400/iSeries), Oracle sobre Linux y SQL Server sobre Windows",
                ]}
                tecnologias={["PL/SQL", "DB2", "Oracle", "SQL Server"]}
              />

              <TimelineItem
                periodo="2010 – 2012"
                rol="Desarrollador — TINET"
                descripcion="Primer trabajo como desarrollador, en paralelo a la carrera, para distintos clientes y tecnologías."
                logros={[
                  "BICE Vida: lógica de negocio en PL/SQL sobre Oracle",
                  "Factoring Security: sistema de administración en ASP.NET y SQL Server",
                  "Los Héroes: administración de campañas en Ruby on Rails",
                  "Tucarga.cl: aplicación web con JSF2, Hibernate y Oracle",
                ]}
                tecnologias={["Java", ".NET", "Ruby on Rails", "PL/SQL"]}
              />

              <TimelineItem
                id="era-2001"
                periodo="2007 – 2010"
                rol="Carrera en la PUCV"
                descripcion="Años dedicados principalmente a Ingeniería de Ejecución en Informática. Desde 2010 la continué trabajando en paralelo como desarrollador."
              />

              <TimelineItem
                periodo="2001 – 2007"
                rol="Soporte, instalación y QA — Epson, AT&T, Quintec, Altec, Binaria"
                descripcion="Inicio de carrera como técnico informático, antes y durante los primeros años de universidad."
                logros={[
                  "Epson Chile (2001): reparación técnica de impresoras",
                  "AT&T Long Distance (2001 – 2002): soporte a clientes de Internet conmutado y VISP, como práctica profesional de técnico",
                  "Quintec (2002): instalación de PCs y redes, y capacitación a usuarios, en el proyecto “Abre tu Mundo” para las bibliotecas públicas de DIBAM, con equipos donados por la Fundación Bill & Melinda Gates",
                  "Quintec (2003 – 2004): soporte y QA de aplicaciones web en .NET, C# y SQL Server para Nestlé, El Mercurio, Fullpak y Altec",
                  "Altec, Grupo Santander (2004 – 2006): soporte a usuarios y testing de una herramienta BPM en .NET y C#",
                  "Binaria, Grupo CGE (2006 – 2007): diseño y ejecución de pruebas para una solución móvil de ventas en ruta",
                ]}
                tecnologias={[".NET", "C#", "SQL Server", "Redes"]}
              />
            </TracingBeam>
          </div>
        </Container>
      </Section>

      {/* Aportes técnicos */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Aportes técnicos al equipo
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Lo que construí en WOM para que el equipo trabaje mejor, más allá
                de los proyectos. Detalle en{" "}
                <Link
                  href="/como-trabajo"
                  className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
                >
                  Cómo trabajo
                </Link>
                .
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2 lg:pl-10">
              {aportes.map((aporte) => (
                <li
                  key={aporte}
                  className="spotlight flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-sm leading-relaxed md:[&:last-child:nth-child(odd)]:col-span-2"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="text-[var(--text-secondary)]">{aporte}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Technical skills */}
      <Section variant="surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Habilidades técnicas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:pl-10 xl:grid-cols-3">
              {habilidades.map((grupo) => (
                <Card key={grupo.titulo}>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {grupo.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {grupo.detalle}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Formación
            </h2>

            <div className="lg:pl-10">
              <div className="grid gap-4 md:grid-cols-3">
                {titulos.map((t) => (
                  <Card key={t.titulo}>
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {t.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {t.institucion}
                    </p>
                    <p className="mt-2 font-mono text-xs text-[var(--text-subtle)]">
                      {t.anio}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Cursos de capacitación
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Aprendí por capas: del hardware y las redes a la programación.
                  </p>
                  <ul className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                    {formacionTemprana.map((item) => (
                      <li key={item.donde} className="py-3">
                        <p className="text-sm font-medium text-[var(--text-secondary)]">
                          {item.que}
                        </p>
                        <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                          {item.donde}
                          <span className="ml-2 font-mono text-xs text-[var(--text-subtle)]">
                            {item.anio}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Idiomas
                  </h3>
                  <div className="mt-4 space-y-2">
                    {idiomas.map((idioma) => (
                      <div
                        key={idioma.nombre}
                        className="flex items-center justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3"
                      >
                        <span className="text-sm text-[var(--text-secondary)]">
                          {idioma.nombre}
                        </span>
                        <span className="text-right font-mono text-xs text-[var(--text-muted)]">
                          {idioma.nivel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="surface">
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
