import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
