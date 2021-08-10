import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { MENU, NAME } from "../data/data";

type NavbarProps = {
  menuShow: unknown;
  showMenu: (e: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
  return (
    <div className="shadow-lg navbar bg-neutral text-neutral-content">
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
            <MenuIcon className="w-5 h-5 lg:hidden " />
          ) : (
            <XIcon className="w-5 h-5 lg:hidden" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
