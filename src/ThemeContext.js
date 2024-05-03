"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let savedDarkMode = false;
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem('darkMode');
    savedDarkMode = saved !== null ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const [darkMode, setDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const bodyClass = darkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <body className={bodyClass}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};