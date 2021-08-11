import { motion } from "framer-motion";
import React from "react";
import { GREETING_DESCRIPTION, GREETING_TEXT } from "../data/data";

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
      style={{
        backgroundImage: "url(https://picsum.photos/id/1005/1600/1400)",
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold ">{GREETING_TEXT}</h1>
            <p className="mb-5">{GREETING_DESCRIPTION}</p>
            <button className="transition btn btn-primary">Know More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
