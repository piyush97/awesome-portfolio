// TODO
import React, { createContext, useContext, useState } from "react";

type ThemeContextProps = {
  theme: string;
  updateTheme: () => void;
} | null;

type ThemeProviderProps = {
  children: JSX.Element[] | JSX.Element;
};
const ThemeContext = createContext<ThemeContextProps>(null);
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const updateTheme = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  return useContext<ThemeContextProps>(ThemeContext);
};

export default ThemeProvider;
