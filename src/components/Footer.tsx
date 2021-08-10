import React from "react";
import { MENU, NAME } from "../data/data";

const Footer: React.FC = () => {
  return (
    <>
      <div className="pb-12 bg-linear-pink-invert">
        <div className="container flex flex-col items-center justify-center pt-20 mx-auto lg:pt-72">
          <div>
            <img src="test" alt="logo" />
          </div>
          <div className="flex flex-col pt-3 text-black md:items-center f-f-l">
            <h1 className="text-2xl font-black">Piyush Mehta</h1>

            <div className="my-6 text-base text-color f-f-l">
              <ul className="items-center md:flex">
                {MENU.map(({ key, name }) => (
                  <li className="pt-4 cursor-pointer md:mr-6 lg:py-0" key={key}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 text-sm text-color f-f-l">
              <p>
                {" "}
                © {new Date().getFullYear()} {NAME}. All rights reserved
              </p>
            </div>
          </div>
          <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
          <div className="flex items-center justify-between pt-12">
            <div className="mr-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
