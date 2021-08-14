import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";

function App() {
  const [Theme, setTheme] = useState("light");
  const value: ThemeContextProps = { theme: Theme, setTheme };
  const [menuShow, showMenu] = useState(false);

  return (
    <ThemeContext.Provider value={value}>
      <Navbar menuShow={menuShow} showMenu={showMenu} />

      <HomeContainer />
      <Helmet>
        <html data-theme={Theme} />
      </Helmet>
    </ThemeContext.Provider>
  );
}

export default App;
