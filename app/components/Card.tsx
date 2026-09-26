import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className="text-lg font-semibold text-[var(--text-primary)]">
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
}

export function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
      {children}
    </p>
  );
}

interface CardFooterProps {
  children: ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return (
    <p className="mt-4 text-xs font-medium text-[var(--text-muted)]">
      {children}
    </p>
  );
}
