interface PropsPrimaryuButton {
    children: React.ReactNode;
}

export function PrimaryButton({ children }: PropsPrimaryuButton) {
    return (
        <>
            <div className="button-borders">
                <button className="primaryButton">{children}</button>
            </div>
        </>
    );
}
