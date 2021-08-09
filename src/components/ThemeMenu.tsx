import React from "react";

const ThemeMenu: React.FC = () => {
  return (
    <div className="dropdown">
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default ThemeMenu;
