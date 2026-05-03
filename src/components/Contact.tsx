import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { GithubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from "@/components/Icon";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      Icon: MailIcon,
    },
    profile.contact.linkedin && {
      label: "LinkedIn",
      value: profile.contact.linkedin.replace(/^https?:\/\//, ""),
      href: profile.contact.linkedin,
      Icon: LinkedInIcon,
    },
    profile.contact.github && {
      label: "GitHub",
      value: profile.contact.github.replace(/^https?:\/\//, ""),
      href: profile.contact.github,
      Icon: GithubIcon,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  }[];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Open to full-time UX/UI and front-end roles, plus interesting product work along the way. Email is the best way to reach me."
    >
      <div className="grid gap-3 md:grid-cols-3">
        {links.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
            className="group flex items-center justify-between gap-4 rounded-(--radius-md3-lg) border border-outline-variant bg-surface-container p-5 shadow-(--shadow-elev-1) transition-all hover:-translate-y-0.5 hover:bg-surface-container-high hover:shadow-(--shadow-elev-2)"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-container text-on-primary-container">
                <Icon />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                  {label}
                </p>
                <p className="text-sm font-medium text-on-surface">{value}</p>
              </div>
            </div>
            <ArrowUpRightIcon className="h-4 w-4 text-on-surface-variant transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}
