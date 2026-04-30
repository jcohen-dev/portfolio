"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Section } from "@/components/Section";

export function ProjectsTab() {
  const [openId, setOpenId] = useState<string | null>(null);

  const open = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [openId]
  );

  return (
    <div className="space-y-10">
      <Section
        eyebrow="Projects"
        title="Selected work"
        description="A focused slice of recent work — research artifacts, interfaces, and shipped tools. Click any card to read more."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setOpenId} />
          ))}
        </div>
      </Section>

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </div>
  );
}
