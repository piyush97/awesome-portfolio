import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
  IMAGE,
  KEYWORDS,
  NAME,
} from "../data/data";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-primary-content text-primary">
      <Seo
        lang="en"
        metaDescription={GREETING_DESCRIPTION}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME}
        author={NAME}
      />
      <Hero
        image={HERO_IMAGE}
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <ExperienceContainer />
      <div className="px-12 divider" />
      <ProjectsContainer />
      <div className="px-12 divider" />
      <SkillsContainer />
      <Footer />
    </div>
  );
};

export default HomeContainer;
