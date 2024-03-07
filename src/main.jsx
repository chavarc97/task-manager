import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./index.css";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.500", "grey.50")(props),
      color: mode("gray.800", "grey.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
