import { useState, useEffect } from "react";

export const ProgressBar = ({ urlRequisicao }: any) => {
    const [progress, setProgress] = useState(0);
    console.log(
        "🚀 ~ file: ProgressBar.tsx:5 ~ ProgressBar ~ progress",
        progress
    );

    useEffect(() => {
        const fetchData = async () => {
            const response: any = await fetch(urlRequisicao);
            const reader = response.body.getReader();
            let loaded = 0;

            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    break;
                }

                loaded += value.length;
                setProgress((loaded / 1000) * 100); // exemplo de cálculo
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div
                style={{
                    width: `${progress}%`,
                    height: "20px",
                    backgroundColor: "blue",
                }}
            />
        </div>
    );
};
