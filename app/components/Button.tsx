import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

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
  "inline-flex items-center justify-center rounded-[var(--radius-full)] px-6 py-3 text-sm font-medium transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)]",
  secondary:
    "border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:bg-[var(--surface)]",
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
