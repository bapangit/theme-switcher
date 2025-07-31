// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import type { DefaultTheme } from "styled-components/dist/types";

const STORAGE_KEY = "app-theme";

const defaultTheme: DefaultTheme = {
  style: 1,
  backgroundColor: "red",
  color: "#000",
  fontWeight: "400",
  font: "'Inter', sans-serif",
};

interface ThemeContextProps {
  appTheme: DefaultTheme;
  setAppTheme: (theme: DefaultTheme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appTheme, setThemeState] = useState<DefaultTheme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTheme));
      return defaultTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appTheme));
  }, [appTheme]);

  const setAppTheme = (newTheme: DefaultTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier access
export const useAppTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
