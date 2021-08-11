import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Seo from "./components/Seo";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME } from "./data/data";

function App() {
  const [Theme, setTheme] = useState("cupcake");
  const value: ThemeContextProps = { theme: Theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <HomeContainer />
      <Seo
        lang="en"
        metaDescription={GREETING_DESCRIPTION}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME}
        author={NAME}
      />
      <Helmet>
        <html data-theme={Theme} />
      </Helmet>
    </ThemeContext.Provider>
  );
}

export default App;
