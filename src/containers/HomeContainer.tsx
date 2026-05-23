import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CTA_TEXT, GREETING_DESCRIPTION, GREETING_TEXT } from "../data/data";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-base-100 text-base-content">
      <Hero
        image=""
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <ExperienceContainer />
      <ProjectsContainer />
      <SkillsContainer />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomeContainer;
