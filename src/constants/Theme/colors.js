import { createTheme } from "@mui/material";
export const CustomBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

export const themePalette = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: CustomBlue[700],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: CustomBlue[200],
      contrastText: "#000000",
    },
    gradiant: {
      bank: "pink",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#f57f17",
    },
    success: {
      main: "#388e3c",
    },
  },
});
