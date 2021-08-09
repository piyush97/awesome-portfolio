import { BeakerIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { MENU, NAME } from "../data/data";
import ThemeMenu from "./ThemeMenu";
const Navbar: React.FC = () => {
  const [showTheme, setShowTheme] = useState(false);

  const showThemeMenu = () => {
    setShowTheme(true);
  };
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
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
        <button className="btn btn-square btn-ghost">
          <BeakerIcon className="h-5 w-5 " onClick={showThemeMenu} />
        </button>
        {showTheme && <ThemeMenu />}
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
