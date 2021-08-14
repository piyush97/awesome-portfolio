import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as HeroIllustration } from "../assets/hero.svg";
import { ReactComponent as Illustration } from "../assets/hero_illustration.svg";
import { HeroProps } from "../types/types";

const Hero: React.FC<HeroProps> = ({
  greetingText,
  greetingDescription,
  buttonText,
}) => {
  return (
    <div
      className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
      id="home"
    >
      <div className="fill-current custom-shape-divider-bottom-1628871186">
        <HeroIllustration />
      </div>
      <div className="inline-block w-full transform scale-125 opacity-5 -rotate-12 text-neutral">
        <Illustration className="absolute fill-current lg:max-h-20 max-h-20 top-20" />
      </div>

      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <motion.div
            animate={{ scale: [0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-5 text-5xl font-bold ">{greetingText}</h1>
            <p className="mb-5">{greetingDescription}</p>
            <Link
              to={"experience"}
              spy={true}
              smooth={true}
              duration={300}
              className="transition cursor-pointer btn btn-primary"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
