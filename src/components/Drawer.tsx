import React from "react";
import { MENU } from "../data/data";

const Drawer: React.FC = () => {
  return (
    <div className="drawer-side lg:hidden">
      <ul className="p-4 overflow-y-auto bg-transparent w-100 menu text-base-content">
        {MENU.map(({ key, name, route }) => (
          <li key={key}>
            <a href={route}> {name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
