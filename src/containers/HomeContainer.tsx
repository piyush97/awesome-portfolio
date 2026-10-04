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
    <main className="portfolio-content" id="portfolio-content">
      <Hero
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <ProjectsContainer />
      <ExperienceContainer />
      <SkillsContainer />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomeContainer;
