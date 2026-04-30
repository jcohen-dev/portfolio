"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TabId = "intro" | "projects";

const TABS: { id: TabId; label: string; hash: string }[] = [
  { id: "intro", label: "Introduction", hash: "" },
  { id: "projects", label: "Projects", hash: "#projects" },
];

function readHash(): TabId {
  if (typeof window === "undefined") return "intro";
  const hash = window.location.hash.replace("#", "");
  return hash === "projects" ? "projects" : "intro";
}

export function Tabs({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Sections"
      className="inline-flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container p-1 shadow-(--shadow-elev-1)"
    >
      {TABS.map((tab) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative inline-flex h-10 min-w-[7.5rem] items-center justify-center rounded-full px-5 text-sm font-medium transition-colors duration-200",
              selected
                ? "bg-primary text-on-primary shadow-(--shadow-elev-2)"
                : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export function useTabRouting() {
  const [active, setActive] = useState<TabId>("intro");

  useEffect(() => {
    setActive(readHash());
    const onHash = () => setActive(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function setTab(id: TabId) {
    setActive(id);
    const hash = id === "projects" ? "#projects" : "";
    if (hash) {
      window.history.replaceState(null, "", hash);
    } else {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  return { active, setTab };
}
