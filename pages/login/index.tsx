import Router from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import { Container } from './styles';

const Login: React.FC = () => {
    const LoginForm = () => {
        const setJWT = (jwt: string): void => {
            localStorage.setItem("jwt", jwt);
        };

        const getJWT = (): string | null => {
            return localStorage.getItem("jwt");
        };

        const api = axios.create({
            baseURL: "https://api-project-vdlx.onrender.com/",
            headers: {
                Authorization: `Bearer ${getJWT()}`,
            },
        });

        const handleLogin = async (username: string, password: string) => {
            try {
                const response = await api.post("/login/user", {
                    username,
                    password,
                });
                const { jwt } = response.data;
                setJWT(jwt);
                // Router.push("/protected");
            } catch (error) {
                console.error(error);
            }
        };
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (e: { preventDefault: () => void }) => {
            e.preventDefault();
            console.log(email, password);
            handleLogin(email, password);
        };

        return (
            <form
                className="bg-white p-6 rounded-lg shadow-md text-black"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                    Sign In
                </button>
            </form>
        );
    };

    return (
        <>
            Login
            <LoginForm />
        </>
    );
};

export default Login;
