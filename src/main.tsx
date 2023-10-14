import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

import { CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const rootElement = document.getElementById("root")!;

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(59 130 246)",
      contrastText: "white",
    },
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
