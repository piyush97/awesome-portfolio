import React from "react";
import { Helmet } from "react-helmet";
import HomeContainer from "./containers/HomeContainer";
import ThemeProvider, { useTheme } from "./context/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className="App">
        <HomeContainer />
        {theme}
        <Helmet>
          <html data-theme={theme} />
        </Helmet>
      </div>
    </ThemeProvider>
  );
}

export default App;
