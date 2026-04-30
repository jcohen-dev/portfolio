"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, type TabId } from "@/components/Tabs";
import { profile } from "@/data/profile";

export function Header({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onChange("intro");
          }}
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-on-surface"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-on-primary shadow-(--shadow-elev-1)"
          >
            {profile.monogram}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Tabs active={active} onChange={onChange} />
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl justify-center px-4 pb-4 md:hidden">
        <Tabs active={active} onChange={onChange} />
      </div>
    </header>
  );
}
