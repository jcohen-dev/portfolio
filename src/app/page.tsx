"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTabRouting } from "@/components/Tabs";
import { IntroductionTab } from "@/components/IntroductionTab";
import { ProjectsTab } from "@/components/ProjectsTab";

export default function HomePage() {
  const { active, setTab } = useTabRouting();

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Header active={active} onChange={setTab} />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="animate-[fadeIn_280ms_ease-out]"
        >
          {active === "intro" ? <IntroductionTab /> : <ProjectsTab />}
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
