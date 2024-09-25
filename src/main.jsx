import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import theme from "./styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

import "../lib/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);