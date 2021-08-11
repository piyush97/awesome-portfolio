import React from "react";
import { MENU, NAME } from "../data/data";

const Footer: React.FC = () => {
  return (
    <>
      <div className="pb-2 bg-base-300">
        <div className="container flex flex-col items-center justify-center pt-20 mx-auto lg:pt-72">
          <div>
            <img src="test" alt="logo" />
          </div>
          <div className="flex flex-col pt-3 text-base-content md:items-center f-f-l">
            <h1 className="text-2xl font-black">Piyush Mehta</h1>

            <div className="my-6 text-base text-center text-color f-f-l ">
              <ul className="items-center md:flex">
                {MENU.map(({ key, name }) => (
                  <li className="pt-4 cursor-pointer md:mr-6 lg:py-0" key={key}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-1 text-sm text-color f-f-l">
              <p>
                © {new Date().getFullYear()} {NAME}. All rights reserved
              </p>
              <p className="self-center justify-center text-center text-2xs font-extralight">
                Theme designed and made by{" "}
                <a href="https://piyushmehta.com" className="underline">
                  Piyush Mehta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
