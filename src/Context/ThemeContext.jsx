import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");
  const [dark, setDark] = useState(savedTheme === "dark");

  useEffect(() => {
    // If there is no theme preference in localStorage, default to "light"
    if (savedTheme === null) {
      localStorage.setItem("theme", "light");
    } else {
      setDark(savedTheme === "dark");
    }
  }, [savedTheme]);

  const toggle = () => {
    setDark(!dark);
    localStorage.setItem("theme", dark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
