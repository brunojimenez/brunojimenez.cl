import type { Metadata } from "next";
import { openGraphBase } from "../lib/site";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";
import ParallaxHeader from "../components/ParallaxHeader";
import { reveal } from "../lib/reveal";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Bruno Jiménez: 25 años de experiencia en integración de sistemas y desarrollo backend. De soporte técnico a arquitectura de microservicios.",
  alternates: {
    canonical: "/sobre-mi",
  },
  openGraph: {
    ...openGraphBase,
    title: "Sobre mí | Bruno Jiménez",
    description:
      "25 años de experiencia en integración de sistemas y desarrollo backend.",
    url: "/sobre-mi",
  },
};

const filosofia = [
  "Ir siempre un paso más allá de lo que se pide.",
  "Partir aunque haya incertidumbre, pero partir.",
  "Proponer antes de solicitar.",
  "Cuidar a diario un buen ambiente de trabajo.",
  "Compartir el conocimiento: orientar, capacitar y documentar.",
];

export default function SobreMi() {
  return (
    <div className="flex flex-col">
      {/* 1 columna: presentación */}
      <ParallaxHeader diseno="red" className="py-14 sm:py-24">
        <Container>
          {/* En móvil la foto queda debajo del texto porque va después en el DOM */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-16">
            <div>
              <EyebrowLabel className="whitespace-nowrap">Perfil profesional</EyebrowLabel>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                Sobre mí
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-[var(--text-muted)] sm:text-2xl sm:leading-relaxed">
                Llevo 25 años haciendo que sistemas distintos se entiendan entre
                sí. Es un tema que parece técnico, pero en el fondo es de
                comunicación: conseguir que plataformas diseñadas por separado
                trabajen juntas, con datos íntegros y procesos continuos.
              </p>
            </div>
            <Image
              src="/images/profile.webp"
              alt="Retrato de Bruno Jiménez"
              width={700}
              height={942}
              sizes="(min-width: 1024px) 280px, 60vw"
              className="w-3/5 max-w-72 rounded-[var(--radius-lg)] border border-[var(--border)] lg:w-full"
              priority
            />
          </div>
        </Container>
      </ParallaxHeader>

      {/* 2 columnas: trayectoria y forma de trabajar */}
      <Section variant="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div {...reveal()} className="space-y-5 text-[var(--text-muted)]">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                El hilo de mi carrera
              </h2>
              <p className="leading-relaxed">
                Empecé en soporte técnico y QA a principios de los 2000. Ahí
                aprendí a entender los sistemas desde adentro: cómo se comportan
                en producción y por qué vale la pena verificar cada supuesto. Esa
                mirada me acompaña hasta hoy.
              </p>
              <p className="leading-relaxed">
                Después pasé al desarrollo: .NET, Ruby on Rails, PL/SQL y
                finalmente Java. A mediados de la década de 2010 me especialicé en
                SOA y BPM, trabajando con Liferay, Oracle BPM y ServiceMix. Ahí
                encontré mi especialidad: hacer que plataformas distintas trabajen
                como una sola.
              </p>
              <p className="leading-relaxed">
                Desde entonces he trabajado en integración para banca (Transbank,
                BCI), retail (Cencosud, Casa&Ideas) y sector público (MINVU,
                JUNAEB). Llegué a WOM como externo, integrando carrier billing con
                Netflix, Spotify y Boku, y luego pasé a planta. Desde entonces he
                trabajado en el equipo on premise (OpenShift y Kafka), en el cloud
                (AWS) y hoy en ambos, con un rol de liderazgo técnico en el área de
                Integración.
              </p>
            </div>

            <div {...reveal(120)} className="space-y-5 text-[var(--text-muted)]">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                Cómo trabajo
              </h2>
              <p className="leading-relaxed">
                Mi recorrido por múltiples lenguajes, motores de bases de datos y
                plataformas me permite abordar con la misma soltura la
                modernización de sistemas en producción y los proyectos nuevos.
                Cuando un proyecto parte de cero, parto por la arquitectura: el
                último sistema de cobro de suscripciones que diseñé llegó a
                producción en menos de dos meses, con cuatro personas
                desarrollando en paralelo.
              </p>
              <p className="leading-relaxed">
                Tengo formación de Scrum Master y suele tocarme cubrir a mis
                jefaturas cuando están de licencia. Pero como carrera prefiero el
                liderazgo técnico a la jefatura de proyectos: como desarrollador
                de la vieja escuela, me gusta seguir con las manos en el código.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 1 columna: principios */}
      <Section>
        <Container>
          <div {...reveal()} className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Lo que me mueve
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
              En el área de Integración de WOM tenemos una línea que también es
              la mía: ser siempre un impulsor de las ideas.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {filosofia.map((idea, i) => (
              <li
                key={idea}
                {...reveal(i * 80)}
                className="spotlight rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5"
              >
                <span className="font-mono text-xs font-medium text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {idea}
                </p>
              </li>
            ))}
          </ul>

          <div {...reveal()} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/cv" variant="accent">Ver mi trayectoria</Button>
            <Button href="/contacto" variant="secondary">
              Contactar
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
                aria-hidden="true"
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
