import React from "react";
import { Helmet } from "react-helmet";
import HomeContainer from "./containers/HomeContainer";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <HomeContainer />
      <Helmet>
        <html data-theme={"light"} />
      </Helmet>
    </ThemeProvider>
  );
}

export default App;
