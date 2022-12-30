/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import AnimesListOverflow from "../../components/AnimesListOverflow";
import InfoAnime from "../../components/InfoAnime";

export async function getStaticPaths() {
    var requestOptions: any = {
        method: "GET",
        redirect: "follow",
    };
    const request = await fetch(
        `https://appanimeplus.tk/play-api.php?populares`,
        requestOptions
    )
        .then((response) => response.json())
        .then(async (result) => await result)
        .catch((error) => console.log("error", error));

    const paths = request.map((anime: any) => {
        const urlPaths = {
            params: { animeId: anime.id },
        };

        return urlPaths;
    });

    return {
        paths: [...paths],
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const responseEps = await fetch(
        `https://appanimeplus.tk/play-api.php?cat_id=${params.animeId}`
    );
    const dataEps = await responseEps.json();

    const responseInfo = await fetch(
        `https://appanimeplus.tk/play-api.php?info=${params.animeId}`
    );

    const infoData = await responseInfo.json();

    return {
        props: {
            epsData: dataEps,
            animeInfo: infoData,
        },
        revalidate: 60,
    };
}

export default function Post({ epsData, animeInfo }: any) {
    console.log(epsData);
    console.log(animeInfo);

    const [stream, setStream] = useState("");
    const [videoId, setVideoId] = useState("");
    const [data, setData] = useState([]);
    const [eps, setEps] = useState([]);
    const [url, setUrl] = useState([]);

    const urlImage = "https://cdn.appanimeplus.tk/img/";

    async function Dale() {
        var requestOptions: any = {
            method: "GET",
            redirect: "follow",
        };
        const request = await fetch(
            `https://appanimeplus.tk/play-api.php?populares`,
            requestOptions
        )
            .then((response) => response.json())
            .then(async (result) => await result)
            .catch((error) => console.log("error", error));

        request.map((data: any) => {
            fetch(`https://appanimeplus.tk/play-api.php?cat_id=${data?.id}`)
                .then((response) => response.json())
                .then((result) => {
                    return "1";
                })
                .catch((error) => console.log("error", error));
        });
        const numbers = Array.from({ length: 3 }, () =>
            request.map((data: any) => {
                fetch(`https://appanimeplus.tk/play-api.php?cat_id=${data?.id}`)
                    .then((response) => response.json())
                    .then((result) => {
                        result;
                    })
                    .catch((error) => console.log("error", error));
            })
        );
        console.log("🚀 ~ file: [animeId].tsx:103 ~ Dale ~ array", numbers);

        return {
            paths: numbers,

            fallback: false,
        };
    }

    useEffect(() => {
        Dale();
    }, []);

    function getVideo(idVideo: any) {
        fetch(`https://appanimeplus.tk/play-api.php?episodios=${idVideo}`)
            .then((response) => response.json())
            .then((result) => {
                setStream(result[0].locationsd);
            })
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetch("https://appanimeplus.tk/play-api.php?populares")
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.log("error", error));
    }, []);

    const categories = animeInfo[0].category_genres.split(",");

    const formatedCategories = categories.map(
        (category: string, index: number) => {
            return (
                <>
                    <div className="border px-2 py-1 rounded-md cursor-default">
                        {category}
                    </div>
                </>
            );
        }
    );

    return (
        <>
            <Head>
                <title>{animeInfo[0].category_name}</title>
            </Head>
            <div className="bg-[#131219] text-white h-full">
                <div className="container mx-auto flex px-24">
                    <div className="w-full pb-20">
                        <InfoAnime
                            title={animeInfo[0].category_name}
                            year={animeInfo[0].ano}
                            quality={"HD"}
                            sinopse={animeInfo[0].category_description}
                            categories={formatedCategories}
                            numberEps={epsData.length}
                            banner={`${urlImage}${animeInfo[0].category_image}`}
                        />
                        <AnimesListOverflow
                            epsList={epsData.map((anime: any) => {
                                return (
                                    <>
                                        <div className="flex justify-between items-center font-semibold py-4 px-2">
                                            <div className="">
                                                {anime.title}
                                            </div>
                                            <div className="flex gap-6">
                                                <button className="rounded-md bg-[#26A85A]  px-4">
                                                    Visto
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        getVideo(videoId);
                                                        setVideoId(
                                                            anime.video_id
                                                        );
                                                    }}
                                                    className="rounded-md bg-[#16308A] px-4 py-2"
                                                >
                                                    Assistir
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        />
                        {/* <video controls className="w-full" src={stream}></video> */}
                    </div>
                </div>
            </div>
        </>
    );
}
