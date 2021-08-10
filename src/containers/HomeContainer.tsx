import React, { useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomeContainer: React.FC = () => {
  const [menuShow, showMenu] = useState(false);

  return (
    <>
      <Navbar menuShow={menuShow} showMenu={showMenu} />
      {menuShow && <Drawer />}
      <Hero />
      <Footer />
    </>
  );
};

export default HomeContainer;
