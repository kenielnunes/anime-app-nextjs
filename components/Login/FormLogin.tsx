import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import InputPadrao from "../inputs/InputPadrao";
import LoaderLogin from "../loader/LoaderLogin";

type LoginFormProps = {
    onRegisterClick: () => void;
};

const FormLogin = ({ onRegisterClick }: LoginFormProps) => {
    const [loading, setLoading] = useState(false);

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

        setLoading(true);

        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API_USERS}/login/user`,
                data,
                requestOptions
            );

            localStorage.setItem("token", response.data.accessToken);

            setLoading(false);
            Router.push("/home");
        } catch (error) {
            alert("Email ou senha incorretos!");
            setLoading(false);
            console.log("error", error);
        }
    };

    return (
        <>
            <div className="w-2/3 flex gap-4 items-center justify-center">
                <form
                    className="lg:w-1/2 flex flex-col gap-4"
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
                    <div>
                        Não possui acesso?{" "}
                        <a
                            className="hover:text-[#FF4655] duration-300"
                            href="#"
                            onClick={onRegisterClick}
                        >
                            Crie uma conta
                        </a>
                    </div>

                    <PrimaryButton
                        disabled={loading}
                        type="submit"
                        hexadecimalColor="FF4655"
                    >
                        Login
                    </PrimaryButton>
                </form>
                {loading ? <LoaderLogin /> : ""}
            </div>
        </>
    );
};

export default FormLogin;
