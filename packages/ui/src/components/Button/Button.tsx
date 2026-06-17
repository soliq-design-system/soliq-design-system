import type { ButtonHTMLAttributes, ReactNode } from "react";
import { colors } from "@soliq/design-tokens";

type ButtonVariant = "primary" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = "primary", children, style, ...props }: ButtonProps) {
  const backgroundColor = variant === "danger" ? colors.danger : colors.primary;

  return (
    <button
      {...props}
      style={{
        border: "none",
        borderRadius: 8,
        padding: "10px 16px",
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor,
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </button>
  );
}
