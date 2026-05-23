import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id }) => {
  return (
    <div className="mb-12" id={id}>
      <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
        — {heading}
      </p>
      <h2 className="text-4xl lg:text-5xl font-black text-base-content">{heading}</h2>
      <div className="mt-4 w-16 h-1 bg-gradient-brand rounded-full" aria-hidden="true" />
    </div>
  );
};

export default Heading;
