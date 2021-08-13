import React, { useState } from "react";
import { Helmet } from "react-helmet";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";

function App() {
  const [Theme, setTheme] = useState("cupcake");
  const value: ThemeContextProps = { theme: Theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <HomeContainer />
      <Helmet>
        <html data-theme={Theme} />
      </Helmet>
    </ThemeContext.Provider>
  );
}

export default App;
