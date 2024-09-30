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
  styles: {
    global: {
      body: {
        bg: "bg.gray",
      },
      a: {
        color: "main.green",
        textDecoration: "underline",
      },
    },
  },
});

export default theme;
