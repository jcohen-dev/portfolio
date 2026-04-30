import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

export function Education() {
  if (profile.education.length === 0) return null;

  return (
    <Section id="education" eyebrow="Education" title="Background">
      <div className="grid gap-4 md:grid-cols-2">
        {profile.education.map((item, i) => (
          <article
            key={i}
            className="rounded-(--radius-md3-lg) border border-outline-variant bg-surface-container p-5 shadow-(--shadow-elev-1)"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-on-surface">{item.school}</h3>
              <span className="text-sm text-on-surface-variant">{item.timeframe}</span>
            </div>
            <p className="mt-1 text-sm text-on-surface-variant">{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
