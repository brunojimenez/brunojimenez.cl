import { ReactNode } from "react";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
}

export default function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <span
      className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.04em] leading-4 text-[var(--text-muted)] ${className}`}
    >
      {children}
    </span>
  );
}
