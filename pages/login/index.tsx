/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Router from "next/router";
import { useState } from "react";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import InputPadrao from "../../components/inputs/InputPadrao";

const LoginForm = () => {
    const Banner = () => {
        return (
            <div className="h-screen w-1/3">
                <img className="h-screen w-full" src="/banner.jpg" alt="" />
            </div>
        );
    };
    const Form = () => {
        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const [data, setData] = useState({
            email: "",
            password: "",
        });
        const handleSubmit = async (event: { preventDefault: () => void }) => {
            event.preventDefault();
            try {
                const response = await axios.post(
                    "https://api-project-vdlx.onrender.com/login/user",
                    data,
                    requestOptions
                );
                localStorage.setItem("token", response.data.accessToken);
                console.log(response);
                Router.push("/home");
            } catch (error) {
                console.log("error", error);
            }
        };
        return (
            <>
                <div className="w-2/3 flex  gap-4 items-center justify-center">
                    <form
                        className="w-1/2 flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="text-xl font-semibold">Login</div>

                            <InputPadrao
                                className="w-full"
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    setData({ ...data, email: e.target.value })
                                }
                            />
                            <InputPadrao
                                className="w-full"
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <PrimaryButton type="submit" hexadecimalColor="FF4655">
                            Login
                        </PrimaryButton>
                    </form>
                </div>
            </>
        );
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <Form />
            <Banner />
        </div>
    );
};

export default LoginForm;
