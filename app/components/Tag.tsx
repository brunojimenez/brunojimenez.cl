import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Tag({ children, variant = "default", className = "" }: TagProps) {
  const variantClasses = {
    default:
      "bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)]",
    accent:
      "bg-[var(--accent-muted)] border-[var(--accent)]/30 text-[var(--accent)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-sm)] border px-2 py-0.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
