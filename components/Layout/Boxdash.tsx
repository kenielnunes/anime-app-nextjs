import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Boxdash = ({ children, className }: Props) => {
    return (
        <div
            className={`shadow-md ${className} bg-[#591418] text-blue-900   rounded-lg m-2 py-4 px-4 sm:px-3 lg:px-5`}
        >
            <div>{children}</div>
        </div>
    );
};

export default Boxdash;
