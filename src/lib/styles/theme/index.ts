import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: `'Sysfont', sans-serif`,
    body: `'W95FA', sans-serif`,
  },

  components: {
    Link: {
      baseStyle: {
        textDecoration: "underline",
        color: "#0a5da9",
        fontSize: "xl",
        _hover: {
          color: "#9ee97a",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "lg",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "3px",
        border: "1px solid black",
        backgroundColor: "#ffffff",
      },
    },
  },
  config,
});
