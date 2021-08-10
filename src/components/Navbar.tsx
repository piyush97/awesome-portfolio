/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ChevronDownIcon,
  ColorSwatchIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { MENU, NAME } from "../data/data";
import { ThemeList } from "../utils/themeList";

type NavbarProps = {
  menuShow: unknown;
  showMenu: (e: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
  const { setTheme } = useTheme();
  return (
    <div className="inset-x-0 top-0 transition duration-300 shadow-lg  navbar bg-neutral lg:fixed text-neutral-content">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">{NAME}</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {MENU.map(({ key, name, route }) => (
            <a
              href={route}
              className="btn btn-ghost btn-sm rounded-btn"
              key={key}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost lg:hidden"
          onClick={() => {
            menuShow ? showMenu(false) : showMenu(true);
          }}
        >
          {!menuShow ? (
            <MenuIcon className="w-5 h-5 lg:hidden" />
          ) : (
            <XIcon className="w-5 h-5 lg:hidden" />
          )}
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost rounded-btn">
            <ColorSwatchIcon className="w-5 h-5 mr-2" /> Change Theme{" "}
            <ChevronDownIcon className="w-5 h-5 " />
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
    </div>
  );
};

export default Navbar;
