import { Skeleton } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import Boxdash from "../../components/Layout/Boxdash";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const [dadosAnimesFav, setDadosAnimesFav] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const tempData = [];
            if (Array.isArray(favoritos)) {
                for (const anime of favoritos) {
                    try {
                        const response = await fetch(
                            `${process.env.BASE_URL_ANIME_API}?info=${anime?.videoId}`
                        );
                        const result = await response.json();
                        tempData.push(result);
                    } catch (error) {
                        console.log("error", error);
                    }
                }
            }
            setDadosAnimesFav(tempData);
        };

        fetchData();
    }, [favoritos]);

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

        setLoading(true);

        fetch(
            `${process.env.BASE_URL_API_USERS}/favorite-videos/user/${storageId}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setLoading(false);
                setFavoritos(result.data);
            })
            .catch((error) => {
                setLoading(false);
                console.log("error", error);
            });
    }, []);

    const urlImage = "https://cdn.appanimeplus.tk/img/";
    return (
        <>
            <Head>
                <title>Anime App | Favoritos</title>
            </Head>
            <div className="px-10">
                <div className="text-white pb-6 text-xl font-bold">
                    Favoritos
                </div>
                <div className="flex text-white overflow-auto justify-center lg:justify-start h-screen gap-4 flex-wrap">
                    {favoritos?.length <= 0 ? (
                        "Nada encontrado"
                    ) : loading ? (
                        <Skeleton
                            sx={{ width: "100%", height: "240px" }}
                            variant="rectangular"
                        />
                    ) : (
                        dadosAnimesFav.map((anime: any) => {
                            return (
                                <CardAnimePadrao
                                    key={anime[0].id}
                                    link={anime[0].id}
                                    imageSrc={`${urlImage}${anime[0].category_image}`}
                                    id={anime[0].id}
                                    name={anime[0].category_name}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}
