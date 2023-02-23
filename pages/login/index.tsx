/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import InputPadrao from "../../components/inputs/InputPadrao";
import FormLogin from "../../components/Login/FormLogin";
import FormRegister from "../../components/Login/FormRegister";

const LoginForm = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleRegisterClick = () => {
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const Banner = () => {
        return (
            <div className="h-screen w-1/3 hidden lg:flex">
                <img className="h-screen w-full" src="/banner.jpg" alt="" />
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Login | Anime App</title>
            </Head>
            <div className="h-screen flex justify-center items-center">
                {showLoginForm ? (
                    <FormLogin onRegisterClick={handleRegisterClick} />
                ) : (
                    <FormRegister onLoginClick={handleLoginClick} />
                )}
                {/* <Banner /> */}
            </div>
        </>
    );
};

export default LoginForm;
