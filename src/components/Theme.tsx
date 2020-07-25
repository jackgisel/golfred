import { createText, createBox } from "@shopify/restyle";

const theme = {
  colors: {
    white: "#ebecf1",
    green: "#206a5d",
    blue: "#1f4068",
    black: "#1b1c25",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 65,
  },
  breakpoints: {},
  textVariants: {
    body: {
      fontSize: 18,
      fontFamily: "Regular",
      color: "white",
      letterSpacing: 1.2,
    },
    title: {
      fontSize: 24,
      fontFamily: "Semibold",
      color: "white",
      letterSpacing: 1.2,
    },
    subtitle: {
      fontSize: 18,
      fontFamily: "Semibold",
      color: "black",
      letterSpacing: 1.2,
    },
    handicap: {
      fontSize: 80,
      lineHeight: 160,
      fontFamily: "Bold",
      color: "white",
      letterSpacing: 1.2,
    },
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
