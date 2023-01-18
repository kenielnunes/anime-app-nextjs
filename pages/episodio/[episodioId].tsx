import Head from "next/head";
import Link from "next/link";
import React from "react";
import AnimesListOverflow from "../../components/AnimesListOverflow";

export async function getStaticProps({ params }: any) {
    const responseDataEp = await fetch(
        `https://appanimeplus.tk/play-api.php?episodios=${params.episodioId}`
    );
    const dataEp = await responseDataEp.json();

    return {
        props: {
            dataEpisodio: dataEp,
        },
        revalidate: 60,
    };
}
export async function getStaticPaths() {
    var requestOptions: any = {
        method: "GET",
        redirect: "follow",
    };
    const request = await fetch(
        `https://appanimeplus.tk/play-api.php?latest`,
        requestOptions
    )
        .then((response) => response.json())
        .then(async (result) => await result)
        .catch((error) => console.log("error", error));

    const paths = request.map((anime: any) => {
        const urlPaths = {
            params: { episodioId: anime.video_id },
        };

        return urlPaths;
    });

    return {
        paths: [...paths],
        fallback: true,
    };
}

export default function Episodio({ dataEpisodio }: any) {
    const Content = () => {
        return (
            <>
                <div>
                    <div className="bg-[#131219] text-white h-screen flex mx-auto flex-col">
                        <div
                            className="flex lg:
                        h-2/3 my-auto flex-col"
                        >
                            <div className="flex lg:w-1/2 px-4 mx-auto flex-col mt-auto">
                                <div className="flex justify-start">
                                    <Link
                                        href="/home"
                                        className="px-4 py-2 bg-white text-black rounded-lg font-bold"
                                    >
                                        Voltar
                                    </Link>
                                </div>
                                <div className="text-white font-bold py-6 text-3xl ">
                                    {dataEpisodio[0].title}
                                </div>
                            </div>
                            <div className="flex lg:w-1/2 mx-auto px-4">
                                <video
                                    controls
                                    src={`${
                                        dataEpisodio[0].locationsd
                                            ? dataEpisodio[0].locationsd
                                            : dataEpisodio[0].location
                                    }`}
                                ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Head>
                <title>{dataEpisodio[0].title}</title>
            </Head>
            <Content />
        </>
    );
}
