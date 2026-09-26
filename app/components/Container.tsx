import { ReactNode } from "react";

type ContainerSize = "prose" | "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeClasses: Record<ContainerSize, string> = {
  prose: "max-w-[720px]",
  default: "max-w-[1200px]",
  wide: "max-w-[1200px]",
};

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
