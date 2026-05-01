"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Section } from "@/components/Section";

export function ProjectsTab() {
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () => projects.filter((p) => p.published !== false),
    []
  );

  const open = useMemo(
    () => visible.find((p) => p.id === openId) ?? null,
    [openId, visible]
  );

  return (
    <div className="space-y-10">
      <Section
        eyebrow="Projects"
        title="Selected work"
        description="A focused slice of recent work — interfaces and shipped tools. Click any card to read more."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setOpenId} />
          ))}
        </div>
      </Section>

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </div>
  );
}
