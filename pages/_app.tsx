/* eslint-disable @next/next/inline-script-id */
import { AppProps } from "next/app";
import Script from "next/script";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import "../styles/globals.css";
import { useEffect } from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
