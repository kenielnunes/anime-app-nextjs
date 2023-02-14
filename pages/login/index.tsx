import axios from "axios";
import Router from "next/router";
import { useState } from "react";

const LoginForm = () => {
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
            <form className="text-black" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <button className="text-white" type="submit">
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
