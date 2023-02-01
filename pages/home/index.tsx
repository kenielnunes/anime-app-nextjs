/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import Skeleton from "@mui/material/Skeleton";
import Head from "next/head";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { BoxRecentAnime } from "../../components/BoxRecentAnimes";
import Link from "next/link";
import Navbar from "../../components/Layout/Navbar";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import VideoPlayer from "../../components/video/VideoPlayer";

const App = (props: any) => {
    const [recentAnimeData, setRecentAnimeData] = useState<any>([]);
    const [popularAnimeData, setPopularAnimeData] = useState<any>([]);

    // const config = {
    //     apiKey: "AIzaSyBj-ao91n7by0dYlZR-RAMMu5DdZJXRkUo",
    //     searchEngineId: "64c5cf84c3e914f5b",
    // };

    // const query = `https://www.googleapis.com/customsearch/v1?key=${
    //     config.apiKey
    // }&cx=${
    //     config.searchEngineId
    // }&q=${"demon slayer"}&searchType=image&imgSize=huge`;

    // const animeLoaded =
    //     popularAnimeData[Math.floor(Math.random() * popularAnimeData.length)];

    console.log(
        "🚀 ~ file: index.tsx:29 ~ App ~ popularAnimeData",
        popularAnimeData
    );

    const [loading, setLoading] = useState(false);

    var requestOptions: any = {
        method: "GET",
        redirect: "follow",
    };

    useEffect(() => {
        fetch("https://appanimeplus.tk/play-api.php?latest", requestOptions)
            .then((response) => response.json())
            .then((result) => setRecentAnimeData(result))
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        fetch("https://appanimeplus.tk/play-api.php?populares", requestOptions)
            .then((response) => response.json())
            .then((result) => setPopularAnimeData(result))
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    function toTitleCase(phrase: string) {
        return phrase
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    const urlImage = "https://cdn.appanimeplus.tk/img/";
    const categorias = [
        "aventura",
        "acao",
        "comedia",
        "drama",
        "dublado",
        "ecchi",
        "escolar",
        "esporte",
        "fantasia",
        "filme",
        "harem",
        "historico",
        "jogo",
        "josei",
        "magia",
        "mecha",
        "militar",
        "misterio",
        "ova",
        "poderes",
        "psicologico",
        "romance",
        "samurai",
        "sci-fi",
        "seinen",
        "shoujo",
        "shounen",
        "slice_of_life",
        "sobrenatural",
        "suspense",
        "terror",
        "yaoi",
        "yuri",
    ];

    const Content = () => {
        const [searchAnime, setSearchAnime] = useState("");
        const [animeEnabledSearch, setAnimeEnabledSearch] = useState([]);

        useEffect(() => {
            fetch(`https://appanimeplus.tk/play-api.php?search=${searchAnime}`)
                .then((response) => response.json())
                .then((result) => {
                    setAnimeEnabledSearch(result);
                })
                .catch((error) => console.log("error", error));
        }, [searchAnime]);

        return (
            <div className="flex mx-auto overflow-x-hidden flex-col">
                <div className="flex  w-screen">
                    <BoxRecentAnime>
                        {recentAnimeData.slice(0, 18).map((data: any) => {
                            return (
                                <>
                                    <p
                                        className="group h-full"
                                        style={{
                                            backgroundImage: `url(
                                          ${urlImage}${data.category_image}
                                      )`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <span className="h-full duration-500">
                                            {/* <img
                                                className="w-full "
                                                src={`${urlImage}${data.category_image}`}
                                                alt=""
                                            /> */}
                                            <div className="hidden justify-end  bg-black w-full h-full bg-opacity-50 group-hover:flex-col gap-4 group-hover:flex duration-500 p-4">
                                                <div className="cursor-default">
                                                    {data.title}
                                                </div>
                                                <div className="flex justify-center">
                                                    <Link
                                                        href={`episodio/${data.video_id}`}
                                                    >
                                                        <PrimaryButton>
                                                            ASSISTIR
                                                        </PrimaryButton>
                                                    </Link>
                                                </div>
                                            </div>
                                        </span>
                                    </p>
                                    {/* <div
                                    // href={`episodio/${data.video_id}`}
                                    style={{
                                        backgroundImage: `url(
                                          ${urlImage}${data.category_image}
                                      )`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                    key={data.id}
                                    id={data.id}
                                    className="h-[300px] w-[15%] flex items-end rounded-lg opacity-90 hover:opacity-100 duration-300 group"
                                >
                                    <div className="h-[35%] w-full bg-black bg-opacity-60 hidden group-hover:flex ease-in-out duration-300 ">
                                        <div className="font-semibold text-white p-2 max-h-full overflow-y-auto">
                                            {data.title}
                                        </div>
                                    </div>
                                </div> */}
                                </>
                            );
                        })}
                    </BoxRecentAnime>
                </div>

                <div className="py-10">
                    <input
                        onChange={(e) => setSearchAnime(e.target.value)}
                        className="p-4 w-1/2 flex mx-auto border-2 text-black rounded-xl"
                        type="text"
                        placeholder="pesquisar"
                    />
                </div>

                <div>
                    {searchAnime.length <= 0 ? (
                        <div className="w-1/2 flex mx-auto  rounded-xl"></div>
                    ) : (
                        <div className="lg:w-1/2 flex mx-auto pb-10 rounded-xl">
                            <div className="h-[300px] flex-wrap flex w-full overflow-y-auto">
                                {animeEnabledSearch == null
                                    ? "Nenhum anime encontrado"
                                    : animeEnabledSearch
                                          .slice(0, 20)
                                          .map((dataSearch: any) => {
                                              return (
                                                  <a
                                                      href={`anime/${dataSearch.id}`}
                                                      //             style={{
                                                      //                 backgroundImage: `url(
                                                      //     ${urlImage}${dataSearch.category_image}
                                                      // )`,
                                                      //                 backgroundRepeat: "no-repeat",
                                                      //                 backgroundPosition: "center",
                                                      //                 backgroundSize: "cover",
                                                      //             }}
                                                      key={dataSearch.id}
                                                      id={dataSearch.id}
                                                      className="w-full flex items-end rounded-lg opacity-90 hover:opacity-100 duration-300"
                                                  >
                                                      <div className="flex gap-4 w-full bg-black bg-opacity-60 ">
                                                          <div>
                                                              <img
                                                                  className="w-[150px] h-[200px]"
                                                                  src={`${urlImage}${dataSearch.category_image}`}
                                                                  alt="banner anime"
                                                              />
                                                          </div>
                                                          <div className="font-semibold text-white p-2 max-h-full ">
                                                              {
                                                                  dataSearch.category_name
                                                              }
                                                          </div>
                                                      </div>
                                                  </a>
                                              );
                                          })}
                            </div>
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="flex flex-col gap-10">
                        <Skeleton
                            sx={{ bgcolor: "grey.300" }}
                            variant="rectangular"
                            width="250px"
                            height="30px"
                        />
                        <Skeleton
                            sx={{ bgcolor: "grey.300" }}
                            variant="rectangular"
                            height="300px"
                        />

                        <Skeleton
                            sx={{ bgcolor: "grey.300" }}
                            variant="rectangular"
                            width="250px"
                            height="30px"
                        />
                        <Skeleton
                            sx={{ bgcolor: "grey.300" }}
                            variant="rectangular"
                            height="300px"
                        />
                    </div>
                ) : (
                    <>
                        <div className="px-12 ">
                            <div className="text-2xl font-bold">Categorias</div>

                            {/* <VideoPlayer
                                url={
                                    "https://get.atv2.net/m.php?token=b2FHWDlWUG9DbE9reGlaT1hXMmlOaVF0aFZwWTRmdmJOeFI3SXVtS1B4Z2N5VWRScnVMUzRlakpxSEFsdmRhM0pocXVNQXprd3R6c291elRLeURNdE5kRzQ1dDJ0QTZCSkFNa3M5MFpYelBVM0xPUm9TTFdDY2JhOXZ6U25Lb0ROMDVOakZjMUV6VWlrVzFmVzZQVFVRcDI0ODFaSlRpdENlVVdOSWdUbXJZczNFaXZSd3RPTEV1KzdsZitTaHd1&qh=hd"
                                }
                            /> */}

                            <div className="flex flex-wrap mx-auto py-10 gap-10">
                                {categorias.map((categoria: string) => {
                                    return (
                                        <Link href={`/categoria/${categoria}`}>
                                            <PrimaryButton>
                                                {toTitleCase(categoria)}
                                            </PrimaryButton>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="px-12 text-2xl font-bold">
                            Populares
                        </div>

                        <Splide
                            options={{
                                type: "loop",
                                drag: "free",
                                focus: 0,
                                perPage: 6,
                                gap: 8,
                                autoScroll: {
                                    speed: 0.2,
                                    pauseOnHover: false,
                                    pauseOnFocus: false,
                                },
                                pagination: false,
                                autoStart: true,
                                autoWidth: true,
                                autoHeigth: true,
                            }}
                            extensions={{ AutoScroll }}
                            aria-label="Anime Images"
                        >
                            {popularAnimeData.map((popularData: any) => {
                                return (
                                    <SplideSlide>
                                        <CardAnimePadrao
                                            link={`anime/${popularData.id}`}
                                            imageSrc={`${urlImage}${popularData.category_image}`}
                                            id={popularData.id}
                                            name={popularData.category_name}
                                        />
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    </>
                )}
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Anime App</title>
            </Head>
            <Navbar />
            <Content />
        </>
    );
};

export default App;
