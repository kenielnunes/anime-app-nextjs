import React from "react";

interface InputPadraoProps {
    placeholder: string;
    onChange: (e: any) => void;
    type: string;
    value?: string;
    className?: string;
}

export default function InputPadrao({
    placeholder,
    onChange,
    type,
    value,
    className,
}: InputPadraoProps) {
    return (
        <>
            <div className="textInputWrapper w-full ">
                <input
                    required
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    className={`textInput p-4 ${className}`}
                />
            </div>
        </>
    );
}
