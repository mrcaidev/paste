import { ColorMode } from "@chakra-ui/react";

interface Props {
  colorMode: ColorMode;
}

export const styles = {
  global: ({ colorMode }: Props) => ({
    html: {
      h: "100%",
      scrollBehavior: "smooth",
    },
    body: {
      h: "100%",
      bg: colorMode === "light" ? "gray.100" : "gray.900",
      color: colorMode === "light" ? "gray.700" : "gray.300",
      fontSize: "lg",
    },
    "#__next": {
      h: "100%",
    },
    h1: {
      fontSize: "5xl",
      fontWeight: "bold",
      lineHeight: "taller",
    },
    h2: {
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "taller",
    },
    h3: {
      fontSize: "3xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h4: {
      fontSize: "2xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h5: {
      fontSize: "xl",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    h6: {
      fontSize: "lg",
      fontWeight: "semibold",
      lineHeight: "taller",
    },
    p: {
      lineHeight: "tall",
    },
    strong: {
      fontWeight: "semibold",
      color: colorMode === "light" ? "blue.800" : "blue.200",
    },
    blockquote: {
      color: "gray.500",
    },
    cite: {
      color: "gray.500",
    },
    hr: {
      my: 2,
    },
    ol: {
      pl: 5,
    },
    ul: {
      pl: 5,
    },
    code: {
      px: 2,
      bg: colorMode === "light" ? "gray.300" : "gray.700",
      borderRadius: "md",
    },
    svg: {
      fill: "currentColor",
    },
  }),
};
