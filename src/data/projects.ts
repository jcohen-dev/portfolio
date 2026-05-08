export type ProjectLink = {
  kind: "github" | "figma" | "demo" | "case_study" | "other";
  url: string;
  label?: string;
};

export type ProjectGalleryItem = {
  src: string;
  caption: string;
  alt?: string;
  title?: string;
};

export type Project = {
  id: string;
  title: string;
  kind?: string;
  year?: string;
  summary: string;
  what_it_does: string;
  role: string;
  role_detail?: string;
  tools: string[];
  outcomes?: string[];
  links?: ProjectLink[];
  /**
   * Optional path to a screenshot. Drop a file into /public/images/ and set
   * `image: "/images/your-screenshot.png"`. Until then the card uses a
   * generated placeholder so the layout still feels finished.
   */
  image?: string;
  /**
   * Optional vertical stack of additional screenshots shown inside the project
   * modal under the hero image. Each item gets a short caption rendered below
   * the shot. Use this when one project has multiple views worth showing.
   */
  gallery?: ProjectGalleryItem[];
  /**
   * Whether this project is shown publicly on the site. Defaults to true if
   * omitted. Set to false to keep an entry in this file (so the content isn't
   * lost) without rendering its card.
   */
  published?: boolean;
  /**
   * Lifecycle marker. When set to "in_progress", the card and modal hero
   * render an "IN PROGRESS" pill so visitors know the project is actively
   * being built and screenshots haven't landed yet.
   */
  status?: "in_progress";
  /**
   * Optional overrides for the generated PlaceholderImage when no `image` is
   * supplied. `text` replaces the default initials; `hueA`/`hueB` (0-360)
   * pin the gradient mesh to a specific palette instead of hashing the title;
   * `gradient` is an art-direction escape hatch and, when set, fully replaces
   * the generated background-image (hueA/hueB are ignored).
   */
  placeholder?: {
    text?: string;
    hueA?: number;
    hueB?: number;
    gradient?: string;
    textSizeClass?: string;
  };
};

/**
 * Add new projects by appending objects to this array.
 * No JSX or component changes needed. The UI consumes this list directly.
 */
export const projects: Project[] = [
  {
    id: "it-request-form",
    title: "GoCloud ServiceDesk",
    kind: "Internal Tool",
    year: "2026 - Present",
    summary:
      "Onboarding, offboarding, and change-request management system. A web-based platform for IT user lifecycle workflows, featuring a state-driven UI and automated back-end integrations.",
    what_it_does:
      "Replaces disconnected, manual request flows with a single web-based interface for managing user onboarding, offboarding, and change requests across IT and operations. State-driven UI logic adapts the form based on request type, surfacing only the relevant fields. Back-end integrations automate downstream actions through a Spring Boot service, a PostgreSQL database, and Microsoft Graph API.\n\nBuilt to support both day-to-day operations and product validation milestones, including investor presentations at GoCloud.",
    role: "UX/UI Designer & Front-End Developer",
    role_detail:
      "DevOps: UX/UI Designer & Front-End Developer · GoCloud Inc.\n\nLed interface design and front-end implementation, translating complex IT and operations requirements into a cohesive, state-driven UI. Collaborated with a back-end developer and lead software engineer to wire the front-end into the back-end services and Microsoft 365 integration. Iterated on the product using Docker, npm, and Claude Code.\n\nCurrently extending the system with AI-enhanced features to automate and scale lifecycle workflows.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Microsoft Graph API",
      "Docker",
      "nginx",
      "npm",
      "Git",
      "Claude Code",
    ],
    // Outcomes intentionally empty: better blank than fabricated. Add real
    // metrics here when you can verify them, e.g.:
    //   "Replaced three disconnected legacy request paths with one form"
    //   "Used in live investor presentations and product validation"
    outcomes: [],
    // TODO: add real links once you decide what to publish (case-study
    // writeup, demo video, internal wiki page, etc.).
    links: [],
    image: "/images/gocloud-my-requests-thumb.png",
    gallery: [
      {
        src: "/images/gocloud-all-requests-before.png",
        alt: "All Requests inbox before the change request is filed, showing status filter chips and two prior approved requests on file for this employee",
        title: "Inbox view for all requests.",
        caption:
          "All requests across companies in one place, with filters for company, status, and type. Designed for approvers to quickly review, accept, or reject requests.",
      },
      {
        src: "/images/gocloud-new-request.png",
        alt: "New Request form on the General Information step with Microsoft 365 connected and a prior request alert for the selected employee",
        title: "Creating a new request.",
        caption:
          "Selecting a request type shows only the fields relevant to that form, with required inputs varying by request. The Microsoft 365 connection is active, and existing requests for the employee are detected for autofill.",
      },
      {
        src: "/images/gocloud-autofill.png",
        alt: "Device and Infrastructure step with an Autofilled from prior termination request confirmation toast and prefilled phone, MAC, and laptop fields",
        title: "Autofill from previous requests.",
        caption:
          "User credentials, groups and lists, devices, and infrastructure details carry over from the most recent request, reducing repeated input and speeding up the process.",
      },
      {
        src: "/images/gocloud-review-submit.png",
        alt: "Review Your Request summary screen with a Draft saved confirmation toast and full request details listed for final review",
        title: "Review before submission.",
        caption:
          "A full summary of the request, with progress saved as a draft to prevent data loss while completing the form. Once confirmed, the request can be submitted.",
      },
      {
        src: "/images/gocloud-my-requests.png",
        alt: "My Requests list with a Request submitted successfully toast and the new Change Request showing Submitted status at the top of the table",
        title: "After submission.",
        caption:
          "The request appears in 'My Requests' for the submitting user with a submitted status badge, indicating it's ready for approval.",
      },
    ],
  },
  {
    id: "project-afg",
    title: "Project AFG",
    kind: "Dark Fantasy RPG",
    year: "2026 - Present",
    status: "in_progress",
    summary:
      "A dark fantasy RPG built around consequence-driven gameplay, where player choices have lasting weight. Top-down, turn-based, and focused on risk, tension, and deliberate decision-making, built to feel immersive, challenging, and rewarding. Currently in development with a small team.",
    what_it_does:
      "Project AFG unfolds across multiple interconnected regions, each with its own enemies and environmental storytelling. Rather than resetting mistakes, the game systems are designed to carry them forward and shape the experience.\n\nProgression is intentionally deliberate with limited ability to save checkpoints. Players are encouraged to commit to decisions and respond to the consequences rather than undo them.\n\nThe tone emphasizes atmosphere, uncertainty, and exploration. The world is built to feel layered and reactive, where outcomes feel earned, carry lasting consequences, and influence what comes next.\n\n\"Project AFG\" remains a working title during development.",
    role: "UX/UI Designer, Front-End Developer & Game Designer",
    role_detail:
      "UX/UI Designer, Front-End Developer & Game Designer · Project AFG\n\nWorking with a small team on a code-only GameMaker (GML) setup. Leading interface and HUD design, contributing to systems implementation, and shaping the feel of progression and turn-based combat readability. Iterating with GameMaker and Claude Code.",
    tools: [
      "GameMaker",
      "GML",
      "Aseprite",
      "Photoshop",
      "Figma",
      "Git",
      "Claude Code",
    ],
    outcomes: [],
    links: [],
    placeholder: {
      text: "AFG",
      gradient: [
        "radial-gradient(at 22% 28%, hsla(355, 60%, 22%, 0.28) 0px, transparent 85%)",
        "radial-gradient(at 78% 72%, hsla(28, 85%, 32%, 0.32) 0px, transparent 90%)",
        "radial-gradient(at 82% 22%, hsla(278, 50%, 24%, 0.3) 0px, transparent 90%)",
        "radial-gradient(at 8% 90%, hsla(15, 55%, 18%, 0.3) 0px, transparent 85%)",
        "linear-gradient(135deg, #100805, #030201)",
      ].join(", "),
    },
  },
  {
    id: "untitled-rpg",
    title: "Untitled",
    kind: "Story-Driven RPG",
    year: "2026 - Present",
    status: "in_progress",
    summary:
      "A story-driven turn-based RPG featuring top-down isometric exploration, a pixel-art overworld, and illustrated character portraits during dialogue. Focused on expressive combat, strong narrative pacing, and a cohesive visual identity. Currently in early development with a small team.",
    what_it_does:
      "Untitled is focused on captivating character design, an immersive world, and an emotionally gripping, ultimately triumphant story. The overworld is hand-crafted, with exploration tied to character moments and key story beats.\n\nCombat is built around strategic team building, with party tactics adapting to varying enemy types and abilities. Each team has a leader who provides a specific buff, influencing how the rest of the party is structured and built, with distinct visuals and animation.\n\nThe story spans past, present, and future, exploring struggle and overcoming, identity and love, and change, with an overall sense of hope.\n\n\"Untitled\" is a working name while the project develops.",
    role: "UX/UI Designer, Front-End Developer & Game Designer",
    role_detail:
      "UX/UI Designer, Front-End Developer & Game Designer · Untitled\n\nWorking with a small team on a Godot 4 setup. Leading interface and HUD design, contributing to systems implementation, and shaping the feel of progression, dialogue flow, and turn-based combat readability. Iterating with Godot 4, Aseprite and Claude Code.",
    tools: [
      "Godot 4",
      "GDScript",
      "Aseprite",
      "Clip Studio Paint",
      "Figma",
      "Git",
      "Claude Code",
    ],
    outcomes: [],
    links: [],
    placeholder: {
      text: "Untitled",
      textSizeClass: "text-5xl",
      gradient: [
        "radial-gradient(at 28% 30%, hsla(222, 65%, 26%, 0.42) 0px, transparent 88%)",
        "radial-gradient(at 78% 72%, hsla(212, 50%, 18%, 0.45) 0px, transparent 88%)",
        "radial-gradient(at 55% 18%, hsla(210, 30%, 88%, 0.1) 0px, transparent 75%)",
        "linear-gradient(135deg, #0a0e1a, #020306)",
      ].join(", "),
    },
  },
];
