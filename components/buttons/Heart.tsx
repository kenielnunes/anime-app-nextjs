/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface HeartProps {
    children?: React.ReactNode;
    status: boolean;
    [key: string]: any;
}

export function Heart({ children, status, ...rest }: HeartProps) {
    const [isBlasted, setIsBlasted] = useState(status);

    function handleClick() {
        setIsBlasted((prev) => !prev);
    }

    return (
        <div
            onClick={handleClick}
            className="relative flex justify-start cursor-pointer"
        >
            <span
                {...rest}
                className={`heart${isBlasted ? " heart-blast" : ""} left-52`}
            ></span>
            {children}
        </div>
    );
}
