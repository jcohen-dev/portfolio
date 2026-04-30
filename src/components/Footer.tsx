import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-outline-variant/60 bg-surface-low">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 text-sm text-on-surface-variant md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js, Tailwind, and Material You.
        </p>
        <p className="text-xs uppercase tracking-[0.16em]">{profile.location}</p>
      </div>
    </footer>
  );
}
