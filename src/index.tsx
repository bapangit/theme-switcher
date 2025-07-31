import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppThemeProvider, useAppTheme } from "@/context/ThemeContext.tsx";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeight};
    font-family: ${({ theme }) => theme.font};
  }
`;

const ThemedApp: React.FC = () => {
  const { appTheme } = useAppTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <ThemedApp />
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
