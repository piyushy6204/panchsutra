// src/components/ui/Button.tsx
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  id?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0C2B45] !text-white border border-[#0C2B45] hover:bg-[#133558] hover:border-[#133558] focus-visible:ring-2 focus-visible:ring-[#B29A68] focus-visible:ring-offset-2",
  secondary:
    "bg-white !text-[#0C2B45] border border-[#0C2B45] hover:bg-[#0C2B45] hover:!text-white focus-visible:ring-2 focus-visible:ring-[#B29A68] focus-visible:ring-offset-2",
  outline:
    "bg-transparent !text-[#B29A68] border border-[#B29A68] hover:bg-[#B29A68] hover:!text-[#0C2B45] focus-visible:ring-2 focus-visible:ring-[#B29A68] focus-visible:ring-offset-2",
  ghost:
    "bg-transparent !text-[#0C2B45] border border-transparent hover:border-[#D9DDE0] hover:bg-[#F7F7F5] focus-visible:ring-2 focus-visible:ring-[#B29A68] focus-visible:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
  id,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-[4px] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";

  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          id={id}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} id={id} style={variant === "primary" ? { color: "#ffffff" } : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
    >
      {children}
    </button>
  );
}
