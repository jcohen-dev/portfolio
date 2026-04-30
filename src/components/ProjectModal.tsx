"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Chip } from "@/components/Chip";
import {
  CloseIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GithubIcon,
  ArrowUpRightIcon,
} from "@/components/Icon";

const LINK_META: Record<
  NonNullable<Project["links"]>[number]["kind"],
  { label: string; Icon: (p: React.SVGProps<SVGSVGElement>) => React.JSX.Element }
> = {
  github: { label: "GitHub", Icon: GithubIcon },
  figma: { label: "Figma", Icon: FigmaIcon },
  demo: { label: "Live demo", Icon: ExternalLinkIcon },
  case_study: { label: "Case study", Icon: ArrowUpRightIcon },
  other: { label: "Open", Icon: ExternalLinkIcon },
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previousFocus.current = (document.activeElement as HTMLElement) ?? null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    // Focus the close button after the dialog mounts
    const t = window.setTimeout(() => closeRef.current?.focus(), 30);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      document.body.style.overflow = "";
      previousFocus.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
      />

      <div
        className="relative m-0 max-h-[92vh] w-full max-w-3xl animate-[modalIn_240ms_ease-out] overflow-y-auto rounded-t-(--radius-md3-xl) border border-outline-variant bg-surface shadow-(--shadow-elev-3) sm:m-4 sm:rounded-(--radius-md3-xl)"
      >
        <div className="relative">
          {project.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <PlaceholderImage label={project.title} className="aspect-[16/9] rounded-none border-b border-outline-variant" />
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-surface-container-highest/95 text-on-surface backdrop-blur transition-colors hover:bg-surface-container-highest"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-6 p-6 md:p-8">
          <header className="flex flex-col gap-2">
            {project.kind && (
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {project.kind}
                {project.year && ` · ${project.year}`}
              </span>
            )}
            <h2 id="project-modal-title" className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              {project.title}
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant">{project.summary}</p>
          </header>

          <Detail label="What it does" body={project.what_it_does} />
          <Detail label="My role" body={project.role_detail ?? project.role} />
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                Outcomes
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-on-surface">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              Tools used
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                Links
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.links.map((link) => {
                  const meta = LINK_META[link.kind];
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-high"
                    >
                      <meta.Icon className="h-4 w-4" />
                      {link.label ?? meta.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes modalIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-on-surface md:text-base">{body}</p>
    </div>
  );
}
