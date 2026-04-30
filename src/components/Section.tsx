import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {(eyebrow || title || description) && (
        <header className="mb-6 flex flex-col gap-2">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-on-primary-container">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
