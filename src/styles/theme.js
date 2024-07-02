import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: {
      green: "#00ED6D",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#181818",
      },
    },
  },
});

export default theme;
