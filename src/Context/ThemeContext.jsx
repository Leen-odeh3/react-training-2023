import React, { createContext, useState } from 'react';

const ThemeContext = createContext(); // Fixed variable name

const ThemeProvider = ({ children }) => {


  const [dark, setDark] = useState(false);
  const toggle = () => {
    setDark(!dark);
    localStorage.setItem("theme",dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
