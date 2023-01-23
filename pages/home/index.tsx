/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";

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

const App = (props: any) => {
    const [recentAnimeData, setRecentAnimeData] = useState<any>([]);
    const [popularAnimeData, setPopularAnimeData] = useState<any>([]);

    const config = {
        apiKey: "AIzaSyBj-ao91n7by0dYlZR-RAMMu5DdZJXRkUo",
        searchEngineId: "64c5cf84c3e914f5b",
    };

    const query = `https://www.googleapis.com/customsearch/v1?key=${
        config.apiKey
    }&cx=${
        config.searchEngineId
    }&q=${"demon slayer"}&searchType=image&imgSize=huge`;

    const animeLoaded =
        popularAnimeData[Math.floor(Math.random() * popularAnimeData.length)];

    // useEffect(() => {
    //     var requestOptions: any = {
    //         method: "GET",
    //         redirect: "follow",
    //     };

    //     fetch(
    //         `https://www.googleapis.com/customsearch/v1?key=${config.apiKey}&cx=${config.searchEngineId}&q=${animeLoaded?.category_name}banner&searchType=image&imgSize=huge&num=2&imgType=photo`,
    //         requestOptions
    //     )
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result);

    //             setBannerDataImage(result.items.map((data: any) => data.link));
    //         })
    //         .catch((error) => console.log("error", error));
    // }, [popularAnimeData]);

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

    const urlImage = "https://cdn.appanimeplus.tk/img/";

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
            <div className="flex mx-auto flex-col ">
                <div className="flex">
                    {recentAnimeData.slice(0, 8).map((data: any) => {
                        return (
                            <>
                                <BoxRecentAnime
                                    text={data.title}
                                    link={undefined}
                                />
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
                </div>

                <PrimaryButton />

                <div className="py-10">
                    <input
                        onChange={(e) => setSearchAnime(e.target.value)}
                        className="p-4 w-1/2 flex mx-auto border-2 rounded-xl"
                        type="text"
                        placeholder="pesquisar"
                    />
                </div>

                <div>
                    {searchAnime.length <= 0 ? (
                        <div className="w-1/2 flex mx-auto pb-10 rounded-xl"></div>
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
                                        <a
                                            href={`anime/${popularData.id}`}
                                            style={{
                                                backgroundImage: `url(
                                          ${urlImage}${popularData.category_image}
                                      )`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                            key={popularData.id}
                                            id={popularData.id}
                                            className="h-[300px] w-[220px] flex items-end rounded-lg opacity-90 hover:opacity-100 duration-300"
                                        >
                                            <div className="h-[35%] w-full bg-black bg-opacity-60 ">
                                                <div className="font-semibold text-white p-2 max-h-full overflow-y-auto">
                                                    {popularData.category_name}
                                                </div>
                                            </div>
                                        </a>
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                        <div className="px-12 text-2xl font-bold">
                            Episódios recentes
                        </div>
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
            <Content />
        </>
    );
};

export default App;
