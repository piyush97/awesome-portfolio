import React from "react";
import { Link } from "react-scroll";
import { MENU, NAME, SOCIAL_LINKS } from "../data/data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const Footer: React.FC = () => (
  <footer className="border-t border-base-300 bg-base-200">
    <div className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="text-2xl font-black text-gradient">{NAME}</span>
          <p className="text-base-content opacity-40 text-sm mt-1">
            Building the future, one line at a time.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {MENU.map(({ key, name, route }) => (
              <li key={key}>
                <Link
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={400}
                  className="text-sm text-base-content opacity-50 hover:opacity-100 hover:text-primary cursor-pointer transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex items-center gap-3" aria-label="Social links">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-base-300 text-base-content opacity-50 hover:opacity-100 hover:text-primary transition-all"
            aria-label="GitHub profile"
            role="listitem"
          >
            <GithubIcon />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-base-300 text-base-content opacity-50 hover:opacity-100 hover:text-primary transition-all"
            aria-label="LinkedIn profile"
            role="listitem"
          >
            <LinkedinIcon />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-base-300 text-base-content opacity-50 hover:opacity-100 hover:text-primary transition-all"
            aria-label="Twitter profile"
            role="listitem"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-base-300 text-center">
        <p className="text-xs text-base-content opacity-30">
          &copy; {new Date().getFullYear()} {NAME}. Designed &amp; developed by{" "}
          <a
            href="https://piyushmehta.com"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {NAME}
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
