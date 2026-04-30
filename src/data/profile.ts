export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  timeframe: string;
  summary?: string;
};

export type EducationItem = {
  school: string;
  detail: string;
  timeframe: string;
};

export type Profile = {
  name: string;
  monogram: string;
  headline: string;
  subtitle: string;
  availability: string;
  location: string;
  about: string[];
  facts: { label: string; value: string }[];
  skills: SkillGroup[];
  tools: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
  };
};

/**
 * Edit this object to personalize the Introduction tab.
 * Every field is wired into a UI component — no markup changes needed.
 */
export const profile: Profile = {
  name: "[Your Name]",
  monogram: "YN",
  headline: "UI/UX Designer, Developer, and Research-Driven Problem Solver",
  subtitle:
    "I design and build interfaces grounded in user research — from clinical tools that help EMTs make faster decisions, to internal forms that quietly remove friction for entire IT teams.",
  availability: "Open to new opportunities",
  location: "United States",
  about: [
    "I work at the intersection of design, engineering, and research. My favorite projects start with a real, observable problem — a workflow that's slower than it should be, an interface fighting its users, a question no one has time to answer well.",
    "I move fluidly between Figma and code. I'll prototype, talk to the people doing the work, and ship something that earns its place. I care less about pixel polish in isolation and more about whether the screen actually changes how someone gets their job done.",
    "Recent work has spanned medical interfaces for emergency responders and operational tooling for IT/cybersecurity teams. The common thread: research-led decisions, careful interaction design, and clean execution.",
  ],
  facts: [
    { label: "Discipline", value: "Design + Dev" },
    { label: "Specialty", value: "Research-led UI" },
    { label: "Toolkits", value: "Figma · React · Python" },
    { label: "Status", value: "Available" },
  ],
  skills: [
    {
      title: "UI/UX Design",
      summary: "Interaction design, information architecture, and high-fidelity prototypes.",
      items: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
    },
    {
      title: "Frontend Development",
      summary: "Production-grade interfaces with modern React tooling.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
    },
    {
      title: "API & Integration",
      summary: "Connecting tools, services, and data so the right thing happens.",
      items: ["REST APIs", "Python", "Data Pipelines", "Auth Flows", "Automation"],
    },
    {
      title: "Research-Driven Practice",
      summary: "Translating evidence into design and implementation decisions.",
      items: ["User Interviews", "Heuristic Review", "Synthesis", "Decision Frameworks"],
    },
  ],
  tools: [
    "Figma",
    "Python",
    "React",
    "Next.js",
    "Photoshop",
    "Premiere",
    "Microsoft Office",
    "TypeScript",
    "Tailwind",
    "Git",
  ],
  experience: [
    {
      role: "UI/UX Designer & Developer",
      org: "Independent",
      timeframe: "Recent",
      summary:
        "Design and ship interfaces for clinical and operational use cases — combining user research, prototyping in Figma, and production builds in React/Next.js.",
    },
    {
      role: "Research Collaborator",
      org: "Cross-functional teams",
      timeframe: "Ongoing",
      summary:
        "Partner with subject-matter experts (medical, IT/cybersecurity) to translate domain knowledge into usable, evidence-backed product decisions.",
    },
  ],
  education: [
    {
      school: "[Your School]",
      detail: "[Degree or program] — replace with your education detail.",
      timeframe: "[Years]",
    },
  ],
  contact: {
    email: "you@example.com",
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
  },
};
