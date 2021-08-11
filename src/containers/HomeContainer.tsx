import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME } from "../data/data";
import ExperienceContainer from "./ExperienceContainer";

const HomeContainer: React.FC = () => {
  const [menuShow, showMenu] = useState(false);

  return (
    <>
      <Seo
        lang="en"
        metaDescription={GREETING_DESCRIPTION}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME}
        author={NAME}
      />
      <Navbar menuShow={menuShow} showMenu={showMenu} />
      {menuShow && <Drawer menuShow />}
      <Hero />
      <ExperienceContainer />
      <Footer />
    </>
  );
};

export default HomeContainer;
