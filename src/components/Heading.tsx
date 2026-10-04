import React from "react";
import { HeadingProps } from "../types/types";

const Heading: React.FC<HeadingProps> = ({ heading, id }) => {
  return (
    <div className="section-heading" id={id}>
      <h2>{heading}</h2>
    </div>
  );
};

export default Heading;
