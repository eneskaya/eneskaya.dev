import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  sky,
  skyDark,
} from "@radix-ui/colors";

import { createStitches } from "@stitches/react";

const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
      ...skyDark,
    },
    space: {
      xs: "0.25rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
    fontSizes: {
      xs: "0.25rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "2rem",
    },
    sizes: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});

const globalStyles = globalCss({
  body: { backgroundColor: "$sky3", color: "$gray12" },
  a: { color: "$red11", textDecoration: "none" },
  "*": {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    fontFamily:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;',
    verticalAlign: "baseline",
  },
});

export { styled, globalStyles, getCssText };
