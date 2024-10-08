import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import theme from "./styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

import "../lib/i18n";
import { Provider } from "react-redux";

import { store } from "@/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
