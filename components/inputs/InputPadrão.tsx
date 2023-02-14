import React from "react";

interface InputPadraoProps {
    placeholder: string;
    onChange: (e: any) => void;
    type: string;
}

export default function InputPadrão({
    placeholder,
    onChange,
    type,
}: InputPadraoProps) {
    return (
        <>
            <div className="textInputWrapper w-full ">
                <input
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    className="textInput p-4"
                />
            </div>
        </>
    );
}
