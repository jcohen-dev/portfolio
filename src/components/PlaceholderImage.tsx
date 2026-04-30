import { cn } from "@/lib/cn";

/**
 * Visually credible placeholder when no screenshot is supplied yet.
 * Uses MD3 surface tones + a soft gradient mesh keyed off the project title
 * so each card looks distinct even with no image.
 */
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function PlaceholderImage({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const h = hash(label);
  const hueA = h % 360;
  const hueB = (h * 7) % 360;
  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const style = {
    backgroundImage: `radial-gradient(at 18% 22%, hsla(${hueA}, 70%, 70%, 0.55) 0px, transparent 55%), radial-gradient(at 82% 78%, hsla(${hueB}, 75%, 60%, 0.55) 0px, transparent 55%), linear-gradient(135deg, var(--md-surface-container-high), var(--md-surface-container))`,
  };

  return (
    <div
      aria-hidden
      role="img"
      aria-label={`${label} placeholder image`}
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-(--radius-md3-lg) text-on-surface",
        className
      )}
      style={style}
    >
      <span className="font-display text-5xl font-semibold tracking-tight text-on-surface/85 mix-blend-luminosity">
        {initials || "•"}
      </span>
      <span className="absolute bottom-3 left-4 text-[11px] font-medium uppercase tracking-[0.16em] text-on-surface/60">
        Replace with screenshot
      </span>
    </div>
  );
}
