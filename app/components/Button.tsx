import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

interface ButtonElementProps extends ButtonBaseProps {
  type?: "button" | "submit";
  onClick?: () => void;
}

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 py-2.5 text-sm font-medium transition-colors border";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] border-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] hover:border-[var(--button-primary-hover)]",
  secondary:
    "bg-[var(--surface-elevated)] text-[var(--text-primary)] border-[var(--border)] hover:bg-[var(--surface)] hover:border-[var(--border-hover)]",
  accent:
    "bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)] hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)]",
};

function isLink(props: ButtonProps): props is ButtonLinkProps {
  return "href" in props;
}

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (isLink(props)) {
    const { href, external } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = props;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
