import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import { MENU, NAME } from "../data/data";

const Footer: React.FC = () => {
  return (
    <>
      <div className="pb-2 antialiased text-center bg-base-300">
        <div className="container flex flex-col items-center justify-center pt-20 mx-auto lg:pt-72">
          <div className="flex flex-col pt-3 text-base-content md:items-center f-f-l">
            <h1 className="text-3xl font-black ">Piyush Mehta</h1>

            <div className="my-3 text-base text-center text-color f-f-1">
              <ul className="items-center md:flex">
                {MENU.map(({ key, name }) => (
                  <li className="pt-2 cursor-pointer md:mr-6 lg:py-0" key={key}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-1 text-md text-color f-f-l">
              <p>
                © {new Date().getFullYear()} {NAME}. All rights reserved.
              </p>
              <p className="self-center justify-center text-center text-2xs font-extralight">
                Theme designed and developed with
                <HeartIcon className="inline-flex w-3 h-3 mx-0.5 mb-0.5" />
                by{" "}
                <a
                  href="https://piyushmehta.com"
                  className="font-bold underline"
                >
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
