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
  muted: "bg-[var(--surface-muted)]",
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
      className={`py-10 sm:py-16 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
