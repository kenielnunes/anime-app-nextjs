import React from "react";

interface PropsBoxRecentAnime {
    children: React.ReactNode;
}

export function BoxRecentAnime({ children }: PropsBoxRecentAnime) {
    return (
        <div className="boxRecentAnimes font-montserratAlt flex w-screen">
            {children}
        </div>
    );
}
