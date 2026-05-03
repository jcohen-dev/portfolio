import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Designing how it feels and functions">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-base leading-relaxed text-pretty text-on-surface-variant">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="md:col-span-2">
          <dl className="grid gap-4 rounded-(--radius-md3-lg) border border-outline-variant bg-surface-container p-6 shadow-(--shadow-elev-1)">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm uppercase tracking-[0.14em] text-on-surface-variant">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm font-semibold text-on-surface">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
