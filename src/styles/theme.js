import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      green: "#00ED6D",
      lightGreen: "#12FC73",
    },
    bg: {
      gray: "#181818",
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
