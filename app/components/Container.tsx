import { ReactNode } from "react";

type ContainerSize = "narrow" | "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-2xl",
  default: "max-w-3xl",
  wide: "max-w-5xl",
};

export default function Container({
  children,
  size = "wide",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-[var(--spacing-container-x)] sm:px-[var(--spacing-container-x-sm)] ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
