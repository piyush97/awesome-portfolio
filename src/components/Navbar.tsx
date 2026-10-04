import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IS_DEMO, MENU, NAME, TAGLINE } from "../data/data";
import { NavbarProps } from "../types/types";
import { ThemeList } from "../utils/themeList";

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
  const [activeSection, setActiveSection] = useState(MENU[0].route);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      let active = MENU[0].route;
      let closestTop = -Infinity;
      for (const { route } of MENU) {
        const top = document.getElementById(route)?.getBoundingClientRect().top;
        if (top !== undefined && top <= 80 && top > closestTop) {
          active = route;
          closestTop = top;
        }
      }
      setActiveSection(active);
    };
    handleScroll();
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="programme-navigation"
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuShow) {
          showMenu(false);
          document.querySelector<HTMLButtonElement>(".programme-toggle")?.focus();
        }
      }}
    >
      <div className="programme-rail">
        {/* Logo */}
        <div className="portfolio-identity">
          <a href="#home"><h1>{NAME}</h1></a>
          <p>{TAGLINE}</p>
          {IS_DEMO && <p className="demo-notice">Template demo. Work and experience are sample content.</p>}
        </div>

        {/* Desktop nav */}
        <ul className="programme-links">
          {MENU.map(({ key, name, route }) => (
            <li key={key}>
              <a
                href={`#${route}`}
                aria-current={activeSection === route ? "location" : undefined}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme switcher */}
        <div className="theme-control">
          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            className="select select-sm"
            aria-label="Change theme"
          >
            {ThemeList.map(({ key, name, title }) => (
              <option key={key} value={name}>{title}</option>
            ))}
          </select>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="programme-toggle"
          onClick={() => showMenu(!menuShow)}
          aria-label={menuShow ? "Close menu" : "Open menu"}
          aria-expanded={!!menuShow}
          aria-controls="mobile-navigation"
        >
          {menuShow ? (
            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuShow && (
        <div
          id="mobile-navigation"
          className="mobile-programme"
        >
          {MENU.map(({ key, name, route }) => (
            <a
              key={key}
              href={`#${route}`}
              onClick={() => showMenu(false)}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
