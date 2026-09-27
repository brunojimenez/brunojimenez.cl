import type { Metadata } from "next";
import Button from "./components/Button";
import Container from "./components/Container";
import Section from "./components/Section";
import EyebrowLabel from "./components/EyebrowLabel";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section>
      <Container size="prose">
        <EyebrowLabel className="whitespace-nowrap">Error 404</EyebrowLabel>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Esta página no existe.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="accent">
            Ir al inicio
          </Button>
          <Button href="/contacto" variant="secondary">
            Contactar
          </Button>
        </div>
      </Container>
    </Section>
  );
}
