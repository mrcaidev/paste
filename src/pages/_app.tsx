import { Box, ChakraProvider } from "@chakra-ui/react";
import "highlight.js/styles/atom-one-dark.css";
import { AppProps } from "next/app";
import { TopBar } from "src/components/top-bar";
import { theme } from "src/themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <Box as="main" style={{ marginTop: "80px", flexGrow: 1 }}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
