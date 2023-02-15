import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import InputPadrao from "../inputs/InputPadrao";
import LoaderLogin from "../loader/LoaderLogin";

type RegisterFormProps = {
    onLoginClick: () => void;
};

const FormRegister = ({ onLoginClick }: RegisterFormProps) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: username,
            email: email,
            password: password,
        });

        var requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://api-project-vdlx.onrender.com/users", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode == 200) {
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    setLoading(false);
                    alert(result.message);
                } else {
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    setLoading(false);
                    alert("Ocorreu um erro, tente novamente!");
                }
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <>
            <div className="w-2/3 flex gap-4 items-center justify-center">
                <form
                    className="lg:w-1/2 flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <InputPadrao
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder={"Nome de usuário"}
                    />

                    <InputPadrao
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder={"Email"}
                    />

                    <InputPadrao
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={"Senha"}
                    />

                    <PrimaryButton
                        disabled={loading}
                        hexadecimalColor="FF4655"
                        type="submit"
                    >
                        Registrar
                    </PrimaryButton>

                    <div>
                        Já possui uma conta?{" "}
                        <a
                            className="hover:text-[#FF4655] duration-300"
                            href="#"
                            onClick={onLoginClick}
                        >
                            Faça login
                        </a>
                    </div>
                </form>
                {loading ? <LoaderLogin /> : ""}
            </div>
        </>
    );
};

export default FormRegister;
