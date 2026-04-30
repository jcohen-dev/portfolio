import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export function IntroductionTab() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
