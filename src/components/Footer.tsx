import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import { MENU, NAME } from "../data/data";

const Footer: React.FC = () => {
  return (
    <>
      <div className="antialiased text-center t">
        <>
          <svg
            viewBox="0 -20 700 110"
            width="100%"
            height="110"
            preserveAspectRatio="none"
            className="fill-current"
          >
            <path
              transform="translate(0, -20)"
              d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            />
            <path
              d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
              className="fill-current"
            />
          </svg>
        </>
        <div className="flex flex-col pt-3 bg-current md:items-center f-f-l">
          <h1 className="text-4xl font-black text-neutral-content">
            Piyush Mehta
          </h1>

          <div className="my-3 text-base text-center text-neutral-content ">
            <ul className="items-center md:flex">
              {MENU.map(({ key, name }) => (
                <li className="pt-2 cursor-pointer md:mr-6 lg:py-0" key={key}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-3 text-md text-neutral-content">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <p className="self-center justify-center text-center text-2xs font-extralight">
              Theme designed and developed with
              <HeartIcon className="inline-flex w-3 h-3 mx-0.5 mb-0.5" />
              by{" "}
              <a href="https://piyushmehta.com" className="font-bold underline">
                Piyush Mehta
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
