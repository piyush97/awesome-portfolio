import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CONTACT_TAGLINE, SOCIAL_LINKS } from "../data/data";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "./SocialIcons";

const LINKS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: <GithubIcon />, external: true },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon />, external: true },
  { label: "Twitter", href: SOCIAL_LINKS.twitter, icon: <TwitterIcon />, external: true },
  { label: "Email", href: SOCIAL_LINKS.email, icon: <MailIcon />, external: false },
];

const ContactSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="contact"
      className="px-6 py-24 max-w-6xl mx-auto lg:px-16 text-center"
      aria-labelledby="contact-heading"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          hidden: { opacity: 0, y: 30 },
        }}
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          — Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="text-4xl lg:text-5xl font-black text-base-content mb-4"
        >
          Let's Connect
        </h2>
        <div className="mx-auto mb-8 w-16 h-1 bg-gradient-brand rounded-full" aria-hidden="true" />
        <p className="text-base-content opacity-60 max-w-md mx-auto mb-12 text-lg">
          {CONTACT_TAGLINE}
        </p>

        <div className="flex justify-center gap-4 flex-wrap" role="list">
          {LINKS.map(({ label, href, icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-base-300 hover:border-primary hover:text-primary text-base-content transition-all duration-200 hover:bg-primary hover:bg-opacity-5 font-medium"
              role="listitem"
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
