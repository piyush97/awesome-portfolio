/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ChevronDownIcon,
  ColorSwatchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useTheme } from "../context/ThemeProvider";
import { MENU, NAME } from "../data/data";
import { NavbarProps } from "../types/types";
import { ThemeList } from "../utils/themeList";

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
  let listener = null;
  const [scrollState, setScrollState] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (!scrollState) {
          setScrollState(true);
        }
      } else {
        if (scrollState) {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <div className="fixed z-50 w-full h-full bg-transparentshadow drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col h-full drawer-content ">
        <div
          className={`${
            scrollState
              ? `inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out border-b border-transparent bg-primary text-primary-content fixed   navbar`
              : `fixed inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out bg-transparent border-b border-transparent text-primary-content navbar`
          }`}
        >
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <MenuIcon className="w-5 h-5 lg:hidden" />
            </label>
          </div>

          <div className="flex-1 px-2 mx-2">
            {scrollState ? <Logo className="w-20 h-12 fill-current " /> : NAME}
          </div>
          <div className="flex-none navbar-end ">
            <div className="dropdown dropdown-end lg:flex">
              <div tabIndex={0} className="btn btn-ghost rounded-btn ">
                <ColorSwatchIcon className="w-5 h-5 mr-2" />{" "}
                <span className="hidden 2xl:flex xl:flex lg:flex">
                  Change Theme{" "}
                </span>
                <ChevronDownIcon className="hidden w-5 h-5 2xl:flex xl:flex lg:flex" />
              </div>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="antialiased menu-title">
                  <span>Themes</span>
                </li>
                {ThemeList.map(({ key, name, title, icon }) => (
                  <li
                    key={key}
                    className="block text-sm antialiased font-medium text-base-content"
                  >
                    <a onClick={() => setTheme(name)}>
                      <span>
                        {icon} <span className="ml-3">{title}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu horizontal">
              {MENU.map(({ key, name, route }) => (
                <Link
                  key={key}
                  activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className={
                    "btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out"
                  }
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-200">
          {MENU.map(({ key, name, route }) => (
            <Link
              key={key}
              activeClass="btn-ghost btn-sm active font-bold text-secondary-focus h-10 my-2"
              to={route}
              spy={true}
              smooth={true}
              duration={300}
              className={
                "btn-ghost btn-sm rounded-btn cursor-pointer h-10 my-2"
              }
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
