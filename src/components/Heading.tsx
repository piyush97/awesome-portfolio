import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-2 antialiased ">
      <div className="text-3xl">{heading}</div>
    </div>
  );
};

export default Heading;
