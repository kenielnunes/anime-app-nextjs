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
import { NavBar } from "../components/Layout/Navbar";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const use = async () => {
            (await import("tw-elements")).default;
        };
        use();
    }, []);

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     let timer: NodeJS.Timeout;

    //     if (!token) {
    //         router.push("/login");
    //     } else {
    //         const decodedToken: any = jwt_decode(token);
    //         if (decodedToken.exp < new Date().getTime() / 1000) {
    //             // token expirado
    //             localStorage.removeItem("token"); // Remove o token expirado do localStorage
    //             router.push("/login");
    //         } else {
    //             // token válido
    //             timer = setInterval(() => {
    //                 const decodedToken: any = jwt_decode(token);
    //                 if (decodedToken.exp < new Date().getTime() / 1000) {
    //                     // token expirado
    //                     clearInterval(timer);
    //                     localStorage.removeItem("token"); // Remove o token expirado do localStorage
    //                     router.push("/login");
    //                 }
    //             }, 60000); // Verifica a cada minuto
    //         }
    //     }

    //     return () => clearInterval(timer);
    // }, []);

    setTimeout(() => {}, 10000);

    // if (router.pathname === "/" && !localStorage.getItem("token")) {
    //     router.push("/login");
    //     return <LoginForm />;
    // }

    return (
        <ThemeProvider theme={theme}>
            {router.pathname != "/login" && <NavBar />}
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
