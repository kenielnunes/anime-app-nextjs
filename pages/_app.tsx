/* eslint-disable @next/next/inline-script-id */
import { AppProps } from "next/app";
import Script from "next/script";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import LoginForm from "./login";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const use = async () => {
            (await import("tw-elements")).default;
        };
        use();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        } else {
            const exp: any = jwt_decode(token);
            if (exp < new Date().getTime() / 1000) {
                // token expirado
                router.push("/login");
            }
        }
    }, []);

    if (router.pathname === "/" && !localStorage.getItem("token")) {
        router.push("/login");
        return <LoginForm />;
    }

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
