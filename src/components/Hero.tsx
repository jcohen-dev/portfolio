import { profile } from "@/data/profile";
import { SparkleIcon } from "@/components/Icon";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-(--radius-md3-xl) border border-outline-variant bg-surface-container p-8 shadow-(--shadow-elev-2) md:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-tertiary/15 blur-3xl"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-on-primary-container">
          <SparkleIcon className="h-3.5 w-3.5" />
          {profile.availability}
        </span>

        <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-on-surface md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-3 max-w-2xl text-balance text-lg font-medium text-on-surface md:text-xl">
          {profile.headline}
        </p>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-on-surface-variant md:text-lg">
          {profile.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-(--shadow-elev-2) transition-transform hover:-translate-y-0.5 hover:shadow-(--shadow-elev-3)"
          >
            View selected work
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-outline-variant bg-surface-container-high px-6 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
