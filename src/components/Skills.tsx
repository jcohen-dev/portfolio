import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Chip } from "@/components/Chip";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I bring to a team"
      description="A blend of UI/UX design, hands-on development, and research-driven product thinking."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {profile.skills.map((group) => (
          <div
            key={group.title}
            className="rounded-(--radius-md3-lg) border border-outline-variant bg-surface-container p-6 shadow-(--shadow-elev-1) transition-shadow hover:shadow-(--shadow-elev-2)"
          >
            <h3 className="text-base font-semibold text-on-surface">{group.title}</h3>
            <p className="mt-1 text-sm text-on-surface-variant">{group.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
