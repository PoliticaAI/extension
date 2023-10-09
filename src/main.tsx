import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

import { CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const rootElement = document.getElementById("root")!;

const theme = createTheme({
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
