import { ReactNode } from "react";
import { reveal } from "../lib/reveal";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  /** Si se indica, la tarjeta aparece al entrar en pantalla con ese retraso (ms). */
  revealDelay?: number;
}

export default function Card({ children, className = "", hover = false, revealDelay }: CardProps) {
  return (
    <div
      {...(revealDelay === undefined ? {} : reveal(revealDelay))}
      className={`spotlight rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 ${
        hover ? "transition-colors hover:border-[var(--text-subtle)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({ children, as: Component = "h3", className = "" }: CardTitleProps) {
  return (
    <Component className={`text-lg font-semibold tracking-tight text-[var(--text-primary)] ${className}`}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
}

export function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
      {children}
    </p>
  );
}

interface CardFooterProps {
  children: ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return (
    <p className="mt-4 text-xs font-medium text-[var(--text-subtle)]">
      {children}
    </p>
  );
}
