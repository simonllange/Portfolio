import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#eeebff", "#25252b")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode("blue.200", "red.200")(props),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      }),
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: "true",
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
});

export default theme;
