export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  timeframe: string;
  summary?: string;
  bullets?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location?: string;
  timeframe: string;
  gpa?: string;
  focus?: string;
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
 * Every field is wired into a UI component, no markup changes needed.
 */
export const profile: Profile = {
  name: "Josh Cohen",
  monogram: "JC",
  headline: "UX/UI Designer & Front-End Developer",
  subtitle:
    "Working at the intersection of human-centered design and technical implementation, turning user needs into intuitive, functional software.",
  availability: "Open to new opportunities",
  // TODO: replace with city/region you want public, or remove the field entirely.
  location: "United States",
  about: [
    "Cognitive Science graduate with a Specialization in Design and Interaction, bringing hands-on experience in UX/UI design and front-end development, API programming and integration, full-stack development, and research-driven product development. Working at the intersection of human-centered design and technical implementation to turn user needs into intuitive, functional software.",
    "Currently developing a web-based onboarding, offboarding, and change-request management system, integrating front-end interfaces with back-end services and database architecture to support automated user workflows. Skilled at translating complex requirements into clear, efficient user experiences with a focus on usability, scalability, and real-world application.",
    "Strong front-end foundation in HTML, CSS, JavaScript, and TypeScript, working primarily in React, Next.js, and Tailwind CSS. Comfortable across the development environment with Docker, npm, Git, and Claude Code, and experienced in integrating backend systems, databases, and the Microsoft Graph API. My approach is design-led and research-driven: I identify what needs to change in an application, work out the right direction across styling, structure, and functionality, then implement and iterate quickly with AI-assisted development. Also fluent in Adobe Creative Cloud and Microsoft Office, and currently going deeper into LLM-driven development to push workflow automation and system usability further.",
    "Seeking opportunities in UX/UI and front-end development or product-focused software roles, where I can build practical, interactive systems as part of a collaborative team.",
  ],
  facts: [
    { label: "Role", value: "UX/UI Designer + Front-End Developer" },
    { label: "Education", value: "University of California, San Diego" },
    { label: "Degree", value: "B.S. Cognitive Science" },
    { label: "Specialization", value: "Design & Interaction" },
    { label: "Stack", value: "TypeScript · React/Next.js · Tailwind" },
    { label: "Status", value: "Open to new opportunities" },
  ],
  skills: [
    {
      title: "UX/UI Design",
      summary: "Designing interfaces grounded in human-centered principles and real user needs.",
      items: [
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Evaluation",
        "Human-Centered Design",
      ],
    },
    {
      title: "Front-End Development",
      summary: "Building responsive, accessible interfaces with a strong vanilla-web foundation.",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "State-Driven UI Logic",
        "Component-Driven Interfaces",
      ],
    },
    {
      title: "API & Backend Integration",
      summary: "Wiring front-ends to backend services so the right thing happens behind the screen.",
      items: [
        "REST APIs",
        "Microsoft Graph API",
        "Backend Service Integration",
        "Database Integration",
      ],
    },
    {
      title: "Design & Interaction Research",
      summary: "Cognitive science applied to designing and evaluating interactive systems.",
      items: [
        "Interaction Design",
        "User Behavior Analysis",
        "Cognitive Science Methods",
        "Iterative Evaluation",
      ],
    },
  ],
  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Docker",
    "npm",
    "Git",
    "Claude Code",
    "Figma",
    "Microsoft Graph API",
    "Python",
    "Microsoft Office",
    "Photoshop",
    "Premiere",
  ],
  experience: [
    {
      role: "DevOps: UX/UI Designer & Front-End Developer",
      org: "GoCloud Inc.",
      location: "Miami, FL",
      timeframe: "February 2026 - Present",
      bullets: [
        "Built a web-based onboarding, offboarding, and change-request system with state-driven UI logic, improving usability and workflow efficiency while supporting product validation and investor presentations.",
        "Collaborated with a back-end developer and lead software engineer to integrate front-end components with a Spring Boot backend, database, and Microsoft Graph API for automated user management.",
        "Refined features and workflows using Docker, npm, and Claude Code to enhance the user experience and streamline development.",
        "Currently developing AI-enhanced features to automate and scale onboarding and offboarding workflows.",
      ],
    },
    {
      role: "Operations Team Intern",
      org: "GoCloud Inc.",
      location: "Miami, FL",
      timeframe: "June 2024 - September 2024",
      bullets: [
        "Worked with the operations team on automated onboarding and offboarding workflows using the Rewst platform.",
        "Researched and prototyped custom workflow solutions to streamline IT operations and reduce manual processing effort.",
      ],
    },
  ],
  education: [
    {
      school: "University of California, San Diego",
      degree: "B.S. Cognitive Science, Specialization in Design and Interaction",
      location: "San Diego, CA",
      timeframe: "September 2023 - September 2025",
      focus:
        "Focused on designing and evaluating interactive systems by understanding user behavior through a cognitive science lens. The program was project-driven, with each one moving research findings directly into working prototypes. That same research-to-implementation loop drives the systems I ship today.",
    },
    {
      school: "College of San Mateo",
      degree: "Associate in Arts in Psychology for Transfer",
      location: "San Mateo, CA",
      timeframe: "August 2021 - May 2023",
      focus:
        "Psychology and communication studies on a deliberate transfer track to UCSD's Cognitive Science Design and Interaction program, building foundations in human behavior and communication that now anchor my UX/UI and front-end work.",
    },
  ],
  contact: {
    email: "jcohendev@gmail.com",
    linkedin: "https://linkedin.com/in/josh-cohen-dev",
    github: "https://github.com/jcohen-dev",
  },
};
