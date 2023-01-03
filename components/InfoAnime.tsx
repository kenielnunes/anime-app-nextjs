/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function InfoAnime({
    title,
    year,
    quality,
    sinopse,
    categories,
    numberEps,
    banner,
}: any) {
    return (
        <div className="flex justify-between items-center w-full pb-20">
            <div className="w-full text-white flex flex-col gap-6">
                <div className="text-4xl font-semibold">{title}</div>
                <div className="flex gap-6">
                    <div>Ano: {year}</div>
                    <div>Qualidade: {quality}</div>
                </div>
                <div>
                    <div>
                        <img
                            className="w-8 hover:fill-white"
                            src="/like.svg"
                            alt="like"
                        />
                    </div>
                    {/* <div>{linkedinIcon}</div> */}
                    {/* <div>{githubIcon}</div> */}
                </div>
                <div className="max-h-52 overflow-y-auto">{sinopse}</div>
                <div className="flex gap-4 text-sm">{categories}</div>
                <div>Episódios: {numberEps}</div>
            </div>
            <div className="text-white w-full flex justify-end">
                <img className="w-[200px]" src={banner} alt="banner" />
            </div>
        </div>
    );
}
