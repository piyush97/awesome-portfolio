import React from "react";
import { MENU, NAME, SOCIAL_LINKS, TEMPLATE_AUTHOR } from "../data/data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const Footer: React.FC = () => (
  <footer className="border-t border-base-300 bg-base-200">
    <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="text-2xl font-black">{NAME}</span>
          <p className="text-base-content text-sm mt-1">
            Building the future, one line at a time.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {MENU.map(({ key, name, route }) => (
              <li key={key}>
                <a
                  href={`#${route}`}
                  className="text-sm text-base-content hover:text-primary"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex items-center gap-3" role="list" aria-label="Social links">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-base-300 text-base-content"
            aria-label="GitHub profile"
            role="listitem"
          >
            <GithubIcon />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-base-300 text-base-content"
            aria-label="LinkedIn profile"
            role="listitem"
          >
            <LinkedinIcon />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-base-300 text-base-content"
            aria-label="Twitter profile"
            role="listitem"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-base-300 text-center">
        <p className="text-sm text-base-content">
          &copy; {new Date().getFullYear()} {NAME}. Designed &amp; developed by{" "}
          <a
            href={TEMPLATE_AUTHOR.url}
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {TEMPLATE_AUTHOR.name}
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
