import React, { useEffect, useState } from "react";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import Boxdash from "../../components/Layout/Boxdash";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState<any[]>([]);

    const [dadosAnimesFav, setDadosAnimesFav] = useState<any>([]);
    console.log(
        "🚀 ~ file: index.tsx:8 ~ Favoritos ~ dadosAnimesFav",
        dadosAnimesFav
    );

    // useEffect(() => {
    //     favoritos.forEach((anime) => {
    //         fetch(`https://appanimeplus.tk/play-api.php?info=${anime.videoId}`)
    //             .then((response) => response.json())
    //             .then((result) => {
    //                 if (
    //                     !dadosAnimesFav.some(
    //                         (a) => a.animeId === result.animeId
    //                     )
    //                 ) {
    //                     setDadosAnimesFav((prevState: any) => [
    //                         ...prevState,
    //                         result,
    //                     ]);
    //                 }
    //             })
    //             .catch((error) => console.log("error", error));
    //     });
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const tempData = [];
            for (const anime of favoritos) {
                try {
                    const response = await fetch(
                        `https://appanimeplus.tk/play-api.php?info=${anime.videoId}`
                    );
                    const result = await response.json();
                    tempData.push(result);
                } catch (error) {
                    console.log("error", error);
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

        fetch(
            `https://api-project-vdlx.onrender.com/favorite-videos/user/${storageId}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setFavoritos(result.data);
            })
            .catch((error) => console.log("error", error));
    }, []);

    const urlImage = "https://cdn.appanimeplus.tk/img/";
    return (
        <div className="h-screen">
            <Boxdash>
                <div className="flex gap-4 flex-wrap">
                    {dadosAnimesFav.map((anime: any) => {
                        return (
                            <CardAnimePadrao
                                key={anime[0].id}
                                link={anime[0].id}
                                imageSrc={`${urlImage}${anime[0].category_image}`}
                                id={anime[0].id}
                                name={anime[0].category_name}
                            />
                        );
                    })}
                </div>
            </Boxdash>
        </div>
    );
}
