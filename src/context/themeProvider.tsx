import React, { createContext, useContext } from "react";

type ThemeContextProps = {
  theme: string;
};

type ThemeProviderProps = {
  children: JSX.Element[] | JSX.Element;
};

const ThemeContext = createContext<ThemeContextProps>({ theme: "light" });

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const value = {
    theme: "light",
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  return useContext<ThemeContextProps>(ThemeContext);
};

export default ThemeProvider;
