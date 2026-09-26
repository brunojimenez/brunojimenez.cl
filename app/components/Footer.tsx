import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} Bruno Jiménez
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/brunojimenezchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="LinkedIn de Bruno Jiménez"
            >
              LinkedIn
            </a>
            <Link
              href="/contacto"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
