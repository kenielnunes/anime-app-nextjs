interface PropsPrimaryuButton {
    children?: React.ReactNode;
    dataBsToggle?: string;
    dataBsTarget?: string;
    onClick?: () => void;
    hexadecimalColor?: string;
    type?: "button" | "submit";
}

export function PrimaryButton({
    children,
    dataBsToggle,
    dataBsTarget,
    onClick,
    hexadecimalColor,
    type,
}: PropsPrimaryuButton) {
    return (
        <>
            <div className="button-borders">
                <button
                    type={type}
                    data-bs-toggle={`${dataBsToggle}`}
                    data-bs-target={`${dataBsTarget}`}
                    onClick={onClick}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23${hexadecimalColor} /* fill: %23${hexadecimalColor}; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")`,
                    }}
                    className={`primaryButton ${hexadecimalColor}`}
                >
                    {children}
                </button>
            </div>
        </>
    );
}
