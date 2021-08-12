import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full pt-2 antialiased "
      id={id}
    >
      <div className="text-3xl">{heading}</div>
    </div>
  );
};

export default Heading;
