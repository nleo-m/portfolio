import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      green: "#00ED6D",
      lightGreen: "#12FC73",
      gray: "#1B241B",
    },
    bg: {
      gray: "#181818",
    },
    terminal: {
      green: "#4EF531",
      red: "#DB3E39",
    },
  },
  fonts: {
    body: `"Roboto Mono", monospace, sans-serif`,
    heading: `"Roboto Mono", monospace, sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: "bg.gray",
      },
      a: {
        color: "main.green",
        textDecoration: "underline",
        zIndex: 99,
      },
    },
  },
});

export default theme;
