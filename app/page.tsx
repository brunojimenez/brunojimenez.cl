import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Bruno Jiménez
          </h1>
          <p className="mt-2 text-lg font-medium text-zinc-600 dark:text-zinc-400">
            Backend e integración de sistemas
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            25 años haciendo que sistemas distintos se entiendan entre sí. Hoy
            desarrollo microservicios de integración sobre OpenShift con Spring
            Boot, MongoDB y Kafka. Antes, integración y modernización para
            banca, retail y sector público.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Hablemos
            </Link>
            <a
              href="https://www.linkedin.com/in/brunojimenezchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Franja de credenciales */}
      <section className="border-y border-zinc-200 bg-zinc-50 px-4 py-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              25
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              años de trayectoria
            </span>
          </div>
          <div className="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Java · Spring Boot · Kafka · OpenShift
          </div>
          <div className="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-700" />
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Ingeniero de Ejecución en Informática (PUCV)
          </div>
        </div>
      </section>

      {/* Qué hago - 3 tarjetas */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            Qué hago
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tarjeta 1 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Integración entre sistemas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Conecto sistemas que no se hablan: APIs, eventos, colas y
                servicios sobre Spring Boot, Kafka y Apache Camel.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                Para empresas con varios sistemas críticos en producción.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Modernización de plataformas legacy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Migraciones como Oracle WebLogic → Red Hat JBoss EAP o Liferay 6
                → Liferay DXP, e integración de servicios SOAP con plataformas
                actuales.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                Para banca, retail y sector público.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 sm:col-span-2 lg:col-span-1 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Arquitectura e integración
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                SOA, BPM, SSO (CAS/LDAP) y microservicios. Diseño, construcción,
                pruebas y seguimiento en producción.
              </p>
              <p className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                Para equipos que crecen y necesitan orden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de cierre */}
      <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            ¿Tienes sistemas que necesitan hablar entre sí?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Escríbeme y conversemos sobre tu proyecto.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
