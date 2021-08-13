import { motion } from "framer-motion";
import React from "react";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  image,
  greetingText,
  greetingDescription,
  buttonText,
}) => {
  return (
    <div
      className="min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
      style={{
        backgroundImage: `url(${image})`,
      }}
      id="home"
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold ">{greetingText}</h1>
            <p className="mb-5">{greetingDescription}</p>
            <button className="transition btn btn-primary">{buttonText}</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
