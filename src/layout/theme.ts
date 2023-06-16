import { gray, grayDark } from "@radix-ui/colors";

import { createStitches } from "@stitches/react";

const { styled, globalCss, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
    },
    space: {
      xs: "0.25rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
    fontSizes: {
      xs: "0.75rem",
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
    xs: "(max-width: 639px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
});

const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
  },
});

const globalStyles = globalCss({
  body: { backgroundColor: "$gray2", color: "$gray12" },
  a: {
    color: "$gray12",
    textDecoration: "underline",
    textDecorationColor: "$gray10",
    textDecorationThickness: "1px",
    textUnderlineOffset: "3px",
  },
  "*": {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    verticalAlign: "baseline",
    ["-webkit-font-smoothing"]: "antialiased",
  },
});

export { styled, globalStyles, getCssText, darkTheme };
