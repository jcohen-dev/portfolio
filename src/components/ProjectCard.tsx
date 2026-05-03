"use client";

import type { Project } from "@/data/projects";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Chip } from "@/components/Chip";
import { ArrowUpRightIcon } from "@/components/Icon";
import { cn } from "@/lib/cn";
import { withBasePath } from "@/lib/asset";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (id: string) => void;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-(--radius-md3-xl) border border-outline-variant bg-surface-container shadow-(--shadow-elev-1) transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/50 hover:shadow-(--shadow-elev-3)"
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="absolute inset-0 z-10 cursor-pointer rounded-(--radius-md3-xl)"
        aria-label={`Open details for ${project.title}`}
      />

      <div className="relative">
        {project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={withBasePath(project.image)}
            alt={`${project.title} screenshot`}
            className="aspect-[16/10] w-full object-cover"
          />
        ) : (
          <PlaceholderImage label={project.title} className="rounded-none border-b border-outline-variant" />
        )}
        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-surface-container-highest/90 text-on-surface backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRightIcon className="h-4 w-4" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.kind && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {project.kind}
            </span>
          )}
          {project.year && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
              · {project.year}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-on-surface">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-on-surface-variant">{project.summary}</p>

        <div className="mt-auto pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
            My role
          </p>
          <p className="mt-1 text-sm text-on-surface">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tools.slice(0, 4).map((tool) => (
            <Chip key={tool} variant="outlined" className="text-xs">
              {tool}
            </Chip>
          ))}
          {project.tools.length > 4 && (
            <Chip variant="outlined" className="text-xs">
              +{project.tools.length - 4}
            </Chip>
          )}
        </div>
      </div>
    </article>
  );
}
