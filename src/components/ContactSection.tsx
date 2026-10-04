import React from "react";
import { CONTACT_TAGLINE, SOCIAL_LINKS } from "../data/data";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./SocialIcons";

const LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: <GithubIcon />, external: true },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon />, external: true },
  { label: "Twitter", href: SOCIAL_LINKS.twitter, icon: <TwitterIcon />, external: true },
  { label: "Email", href: SOCIAL_LINKS.email, icon: <MailIcon />, external: false },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="contact-programme"
      aria-labelledby="contact-heading"
    >
      <div>
        <h2
          id="contact-heading"
        >
          Let's Connect
        </h2>
        <p>
          {CONTACT_TAGLINE}
        </p>

        <div className="contact-links" role="list">
          {LINKS.map(({ label, href, icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              role="listitem"
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
