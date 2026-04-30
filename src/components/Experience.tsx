import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

export function Experience() {
  if (profile.experience.length === 0) return null;

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've contributed">
      <ol className="relative space-y-6 border-l border-outline-variant pl-6">
        {profile.experience.map((item, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-surface"
            />
            <div className="rounded-(--radius-md3-lg) border border-outline-variant bg-surface-container p-5 shadow-(--shadow-elev-1)">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-on-surface">
                  {item.role} <span className="text-on-surface-variant">— {item.org}</span>
                </h3>
                <span className="text-sm text-on-surface-variant">{item.timeframe}</span>
              </div>
              {item.summary && (
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{item.summary}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
