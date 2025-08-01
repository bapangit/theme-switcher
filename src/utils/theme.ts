import type { DefaultTheme } from "styled-components/dist/types";

const lightTheme: DefaultTheme = {
  style: 1,
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "400",
  font: "'Inter', sans-serif",
  borderColor: "lightgrey",
};

const darkTheme: DefaultTheme = {
  style: 2,
  backgroundColor: "#121212",
  color: "#ffffff",
  fontWeight: "700",
  font: "'Inter', sans-serif",
  borderColor: "#292929ff",
};

const redTheme: DefaultTheme = {
  style: 3,
  backgroundColor: "#ff0000",
  color: "#ffffff",
  fontWeight: "400",
  font: "'Pacifico', cursive",
  borderColor: "#efefefff",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  red: redTheme,
};
