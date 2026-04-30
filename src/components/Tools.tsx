import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Chip } from "@/components/Chip";

export function Tools() {
  return (
    <Section
      id="tools"
      eyebrow="Tools"
      title="Day-to-day toolkit"
      description="The software I reach for most often, from research and design through ship and polish."
    >
      <div className="flex flex-wrap gap-2">
        {profile.tools.map((tool) => (
          <Chip key={tool} variant="outlined">
            {tool}
          </Chip>
        ))}
      </div>
    </Section>
  );
}
