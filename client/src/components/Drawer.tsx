import { motion } from "framer-motion";
import React from "react";
import { MENU } from "../data/data";
import { DrawerProps } from "../types/types";

const Drawer: React.FC<DrawerProps> = ({ menuShow }) => {
  const variants = {
    open: { opacity: 1, x: 0, scale: [0, 1] },
    closed: { opacity: 0, x: 0, scale: 1 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={menuShow ? "open" : "closed"}
      className=" drawer-side lg:hidden"
    >
      <ul className="p-4 overflow-y-auto bg-transparent w-100 menu text-base-content">
        {MENU.map(({ key, name, route }) => (
          <li className="z-1" key={key}>
            <a href={route}> {name}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Drawer;
