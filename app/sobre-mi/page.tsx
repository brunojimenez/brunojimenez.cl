import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";
import EyebrowLabel from "../components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Bruno Jiménez: 25 años de experiencia en integración de sistemas y desarrollo backend. De soporte técnico a arquitectura de microservicios.",
  alternates: {
    canonical: "/sobre-mi",
  },
  openGraph: {
    title: "Sobre mí | Bruno Jiménez",
    description:
      "25 años de experiencia en integración de sistemas y desarrollo backend.",
    url: "https://brunojimenez.cl/sobre-mi",
  },
};

export default function SobreMi() {
  return (
    <div className="flex flex-col">
      <Section>
        <Container size="prose">
          <EyebrowLabel>Perfil profesional</EyebrowLabel>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Sobre mí
          </h1>

          <div className="mt-10 space-y-6 text-[var(--text-muted)]">
            <p className="text-lg leading-relaxed">
              Llevo 25 años haciendo que sistemas distintos se entiendan entre
              sí. Es un tema que parece técnico, pero en el fondo es de
              comunicación: conseguir que plataformas que fueron diseñadas por
              separado trabajen juntas sin perder datos ni romper procesos.
            </p>

            <h2 className="pt-6 text-xl font-semibold text-[var(--text-primary)]">
              El hilo de mi carrera
            </h2>

            <p className="leading-relaxed">
              Empecé en soporte técnico y QA a principios de los 2000. Ahí
              aprendí qué falla y por qué: los sistemas no se caen por magia,
              sino por supuestos que nadie verificó. Esa experiencia me marcó.
            </p>

            <p className="leading-relaxed">
              Después pasé al desarrollo: .NET, Ruby on Rails, PL/SQL y
              finalmente Java. A mediados de la década de 2010 me especialicé en
              SOA y BPM, trabajando con Liferay, Oracle BPM y ServiceMix. Ahí
              descubrí que lo que más me gustaba no era construir aplicaciones
              desde cero, sino hacer que las existentes se comunicaran.
            </p>

            <p className="leading-relaxed">
              Desde entonces he trabajado en integración para banca (Transbank,
              BCI), retail (Cencosud, Casa&Ideas) y sector público (MINVU,
              JUNAEB). Hoy estoy en WOM, desarrollando microservicios de
              integración para carrier billing: conectar los sistemas de cobro
              del operador con plataformas como Spotify, Netflix y Boku.
            </p>

            <h2 className="pt-6 text-xl font-semibold text-[var(--text-primary)]">
              Cómo trabajo
            </h2>

            <p className="leading-relaxed">
              Me gustan los proyectos donde ya hay sistemas en producción que
              necesitan conectarse o modernizarse. Los proyectos desde cero no
              son mi especialidad; lo mío es llegar cuando ya existe algo que
              funciona y hay que integrarlo con algo nuevo.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
