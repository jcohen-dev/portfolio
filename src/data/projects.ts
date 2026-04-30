export type ProjectLink = {
  kind: "github" | "figma" | "demo" | "case_study" | "other";
  url: string;
  label?: string;
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
};

/**
 * Add new projects by appending objects to this array.
 * No JSX or component changes needed — the UI consumes this list directly.
 */
export const projects: Project[] = [
  {
    id: "eeg-stroke",
    title: "Portable EEG Cap — EMT Stroke Triage",
    kind: "Clinical UI/UX",
    year: "Recent",
    summary:
      "An on-scene interface that helps EMTs estimate last-known-well time for suspected ischemic stroke patients using a portable EEG cap.",
    what_it_does:
      "Walks an EMT through capping the patient, capturing a clean EEG signal, and surfacing a model-driven estimate of when the stroke likely began. The screen prioritizes one decision per step, large-touch targets for gloved hands, and a confidence band so the clinician — not the device — owns the call. The output integrates into the patient handoff, giving the receiving stroke team a faster path to treatment eligibility.",
    role: "UI/UX Designer + Developer",
    role_detail:
      "Led the interface design from research through high-fidelity prototype: ride-alongs and protocol interviews, task-flow mapping for pre-hospital care, accessibility-first interaction design (gloves, sunlight, sirens), and a working prototype that the clinical team could test against real workflows.",
    tools: ["Figma", "React", "TypeScript", "Python", "User Research"],
    outcomes: [
      "Reduced cognitive load for on-scene operators by collapsing setup into a guided 4-step flow",
      "Surfaced model uncertainty in a way clinicians trusted instead of dismissed",
      "Created a shared visual language between EMT, receiving hospital, and engineering team",
    ],
    links: [
      { kind: "case_study", url: "#", label: "Case study (coming soon)" },
    ],
  },
  {
    id: "it-request-form",
    title: "New Hire / Termination / Change-Move Request",
    kind: "Internal Tool",
    year: "Recent",
    summary:
      "A unified request form for IT and cybersecurity operations covering onboarding, offboarding, and role changes.",
    what_it_does:
      "Replaces a tangle of email threads and spreadsheets with one dynamic form that adapts to the request type. Hiring managers select 'New Hire,' 'Termination,' or 'Change/Move,' and the form reveals only the fields that matter — access groups, hardware, distribution lists, location, manager. Submissions route to the correct queues automatically and produce an audit trail for compliance.",
    role: "UI/UX Designer + Developer",
    role_detail:
      "Designed the dynamic form schema, the conditional flows, and the operational handoff. Worked with IT and cybersecurity stakeholders to map every edge case, then built the production interface and the routing logic behind it.",
    tools: ["Figma", "React", "TypeScript", "API Integration", "Forms"],
    outcomes: [
      "Collapsed three legacy request paths into one form, eliminating duplicate data entry",
      "Cut average request-to-action time by giving downstream teams structured inputs",
      "Improved auditability for cybersecurity reviews with a consistent submission record",
    ],
    links: [
      { kind: "figma", url: "#", label: "Design exploration" },
    ],
  },
];
