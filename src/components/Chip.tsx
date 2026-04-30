import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ChipVariant = "filled" | "outlined" | "tonal";

export function Chip({
  children,
  variant = "tonal",
  icon,
  className,
}: {
  children: ReactNode;
  variant?: ChipVariant;
  icon?: ReactNode;
  className?: string;
}) {
  const styles: Record<ChipVariant, string> = {
    filled: "bg-primary text-on-primary",
    outlined:
      "border border-outline-variant bg-transparent text-on-surface hover:bg-surface-container",
    tonal:
      "bg-secondary-container text-on-secondary-container hover:bg-primary-container hover:text-on-primary-container",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
        styles[variant],
        className
      )}
    >
      {icon && <span className="grid h-4 w-4 place-items-center [&_svg]:h-4 [&_svg]:w-4">{icon}</span>}
      {children}
    </span>
  );
}
