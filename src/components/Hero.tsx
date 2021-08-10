import React from "react";
import { GREETING_DESCRIPTION, GREETING_TEXT } from "../data/data";

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen pt-0 mt-0 hero bg-gradient-to-br from-primary to-secondary text-primary-content "
      style={{
        backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{GREETING_TEXT}</h1>
          <p className="mb-5">{GREETING_DESCRIPTION}</p>
          <button className="btn btn-primary">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
