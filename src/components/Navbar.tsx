import { SwatchIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = ScrollLink as any;
import { useTheme } from "../context/ThemeProvider";
import { MENU, NAME } from "../data/data";
import { NavbarProps } from "../types/types";
import { ThemeList } from "../utils/themeList";

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.scrollingElement?.scrollTop ?? 0;
      setScrolled(scrollTop > 80);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const nameParts = NAME.split(" ");
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[1][0]}`
      : nameParts[0][0];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-16 flex items-center h-16">
        {/* Logo */}
        <div className="flex-1">
          <span className="text-lg font-black text-gradient" aria-label={NAME}>
            {initials}
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 flex-none">
          {MENU.map(({ key, name, route }) => (
            <li key={key}>
              <Link
                to={route}
                spy={true}
                smooth={true}
                duration={500}
                className="px-4 py-2 text-sm font-medium text-base-content opacity-70 hover:opacity-100 hover:text-primary cursor-pointer transition-all rounded-full hover:bg-base-200 block"
                activeClass="text-primary opacity-100"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme switcher */}
        <div className="dropdown dropdown-end ml-4">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-sm rounded-full gap-2"
            aria-label="Change theme"
          >
            <SwatchIcon className="w-4 h-4" aria-hidden="true" />
            <span className="hidden lg:inline text-xs">Theme</span>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-2xl w-48 mt-2 border border-base-300"
          >
            <li className="menu-title">
              <span className="text-xs opacity-50">Themes</span>
            </li>
            {ThemeList.map(({ key, name, title, icon }) => (
              <li key={key} role="menuitem">
                <button
                  onClick={() => setTheme(name)}
                  className="text-sm flex gap-3 rounded-xl hover:bg-base-300 w-full text-left"
                >
                  <span aria-hidden="true">{icon}</span> {title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden btn btn-ghost btn-sm rounded-full ml-2"
          onClick={() => showMenu(!menuShow)}
          aria-label={menuShow ? "Close menu" : "Open menu"}
          aria-expanded={!!menuShow}
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
          className="lg:hidden bg-base-200 border-t border-base-300 px-6 py-4 flex flex-col gap-2"
          role="menu"
        >
          {MENU.map(({ key, name, route }) => (
            <Link
              key={key}
              to={route}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => showMenu(false)}
              className="px-4 py-3 text-sm font-medium text-base-content hover:text-primary hover:bg-base-300 rounded-xl cursor-pointer transition-colors block"
              role="menuitem"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
