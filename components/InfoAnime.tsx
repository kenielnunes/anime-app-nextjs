/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Heart } from "./buttons/Heart";

export default function InfoAnime({
    title,
    year,
    quality,
    sinopse,
    categories,
    numberEps,
    banner,
    idAnime,
}: any) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [favoritos, setFavoritos] = useState<any[]>([]);

    function verificaUuID(id: number) {
        const video = favoritos?.find(
            (x: { videoId: number }) => x?.videoId == id
        );
        return video?.id;
    }

    const existeId = (videoID: string) => {
        const existe = favoritos?.some(
            (favorito: { videoId: string }) => favorito?.videoId == videoID
        );
        if (existe) {
            return "Remover dos favoritos";
        } else {
            return "Adicionar aos favoritos";
        }
    };

    useEffect(() => {
        const storageId: any = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions: any = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(
            `${process.env.BASE_URL_API_USERS}/favorite-videos/user/${storageId}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setFavoritos(result.data);
            })
            .catch((error) => console.log("error", error));
    }, []);

    function setFavorite(idAnime: any, uuID: string) {
        const token = localStorage.getItem("token");
        const storageId: any = localStorage.getItem("userId");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            videoId: Number(idAnime),
            userId: storageId,
        });

        setIsSubmitting(true);

        if (existeId(String(idAnime)) === "Remover dos favoritos") {
            const requestOptions: any = {
                method: "DELETE",
                headers: myHeaders,
                redirect: "follow",
            };
            fetch(
                `${process.env.BASE_URL_API_USERS}/favorite-videos/${uuID}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    setFavoritos(
                        favoritos.filter((ep: { id: string }) => ep.id !== uuID)
                    );
                    setIsSubmitting(false);
                    console.log(result);
                })
                .catch((error) => {
                    setIsSubmitting(false);
                    console.log("error", error);
                });
        } else {
            const requestOptions: any = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            fetch(
                `${process.env.BASE_URL_API_USERS}/favorite-videos/`,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    setFavoritos([...favoritos, result.data]);
                    setIsSubmitting(false);
                    console.log(result);
                })
                .catch((error) => {
                    setIsSubmitting(false);
                    console.log("error", error);
                });
        }
    }

    return (
        <div className="flex justify-between items-center w-full pb-20">
            <div className="w-full text-white flex flex-col gap-6">
                <div className="text-4xl font-semibold">{title}</div>
                <div className="flex gap-6">
                    <div>Ano: {year}</div>
                    <div>Qualidade: {quality}</div>
                </div>
                <button
                    disabled={isSubmitting}
                    onClick={() => setFavorite(idAnime, verificaUuID(idAnime))}
                    className="flex gap-2 items-center"
                >
                    {existeId(idAnime)}
                    <svg
                        width="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
                                fill={`${
                                    existeId(idAnime) == "Remover dos favoritos"
                                        ? "#fd0000"
                                        : "#d1d1d1"
                                }`}
                            ></path>
                        </g>
                    </svg>
                </button>

                <div className="max-h-52 overflow-y-auto">{sinopse}</div>
                <div className="flex gap-4 text-sm flex-wrap">{categories}</div>
                <div>Episódios: {numberEps}</div>
            </div>
            <div className="text-white hidden w-full lg:flex justify-end">
                <img className="w-[200px]" src={banner} alt="banner" />
            </div>
        </div>
    );
}
