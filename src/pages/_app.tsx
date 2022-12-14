import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
