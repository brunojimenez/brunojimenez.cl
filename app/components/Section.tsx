import { ReactNode } from "react";

type SectionVariant = "default" | "surface" | "muted";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-[var(--background)]",
  surface: "bg-[var(--surface)]",
  muted: "border-y border-[var(--border)] bg-[var(--surface)]",
};

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[var(--spacing-section-y)] sm:py-[var(--spacing-section-y-lg)] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
