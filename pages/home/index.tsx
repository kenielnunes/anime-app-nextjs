/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import "video-react/dist/video-react.css";
import Skeleton from "@mui/material/Skeleton";
import Head from "next/head";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { BoxRecentAnime } from "../../components/BoxRecentAnimes";
import Link from "next/link";
import { NavBar } from "../../components/Layout/Navbar";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import InputPadrão from "../../components/inputs/InputPadrao";
import jwt from "jsonwebtoken";
import Carousel from "../../components/carrossel/Carrossel";

const App = () => {
    const [recentAnimeData, setRecentAnimeData] = useState<any>([]);
    const [popularAnimeData, setPopularAnimeData] = useState<any>([]);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width]);

    function getLatest() {
        fetch(`${process.env.BASE_URL_ANIME_API}?latest`, requestOptions)
            .then((response) => response.json())
            .then((result) => setRecentAnimeData(result))
            .catch((error) => console.log("error", error));
    }

    function getPopulares() {
        fetch(`${process.env.BASE_URL_ANIME_API}?populares`, requestOptions)
            .then((response) => response.json())
            .then((result) => setPopularAnimeData(result))
            .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("/service-worker.js")
                    .then((registration) => {
                        registration;
                        // console.log(
                        //     "Service Worker registrado com sucesso:",
                        //     registration
                        // );
                    })
                    .catch((error) => {
                        console.error(
                            "Erro ao registrar o Service Worker:",
                            error
                        );
                    });
            });
        }

        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                fetch(
                    `${process.env.BASE_URL_ANIME_API}?latest`,
                    requestOptions
                )
                    .then((response) => response.json())
                    .then((result) => {
                        const randomIndex = Math.floor(
                            Math.random() * result.length
                        );
                        const randomElement = result[randomIndex];

                        var notification = new Notification(`Anime App`, {
                            body: `
                                Venha conferir!\n${randomElement.title}
                            `,
                            image: `${urlImage}${randomElement.category_image}`,
                        });
                    })
                    .catch((error) => console.log("error", error));
            }
        });

        getLatest();
        getPopulares();

        // const tokenJWT: any = localStorage.getItem("token");

        // function getPayloadFromToken(token: string) {
        //     const decodedToken = jwt.decode(token, { complete: true });
        //     if (!decodedToken) {
        //         throw new Error("Token inválido");
        //     }
        //     return decodedToken.payload;
        // }

        // const payload: any = getPayloadFromToken(tokenJWT);
        // localStorage.setItem("userId", payload.sub);
    }, []);

    const [loading, setLoading] = useState(false);

    var requestOptions: any = {
        method: "GET",
        redirect: "follow",
    };

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
            fetch(`${process.env.BASE_URL_ANIME_API}?search=${searchAnime}`)
                .then((response) => response.json())
                .then((result) => {
                    setAnimeEnabledSearch(result);
                })
                .catch((error) => console.log("error", error));
        }, [searchAnime]);

        let length;

        switch (true) {
            case width <= 425:
                length = 2;
                break;
            case width <= 768:
                length = 3;
                break;
            case width <= 1024:
                length = 8;
                break;
            case width <= 1280:
                length = 10;
                break;
            case width <= 1440:
                length = 12;
                break;
            case width <= 1600:
                length = 14;
                break;
            default:
                length = 16;
        }

        interface User {
            name: string;
        }

        return (
            <div className="flex mx-auto overflow-x-hidden flex-col">
                <div className="flex w-screen">
                    <BoxRecentAnime>
                        {recentAnimeData
                            .slice(0, length)
                            .map((data: any, index: number) => {
                                return (
                                    <>
                                        <p
                                            key={index}
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
                                                            <PrimaryButton hexadecimalColor="FF4655">
                                                                ASSISTIR
                                                            </PrimaryButton>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </span>
                                        </p>
                                    </>
                                );
                            })}
                    </BoxRecentAnime>
                </div>

                <div className="py-10 flex w-1/2 mx-auto">
                    <InputPadrão
                        onChange={(e) => setSearchAnime(e.target.value)}
                        placeholder="Pesquisar..."
                        type={"text"}
                    />
                </div>
                <div>
                    <div className="px-12">
                        {/* Bem vindo - {dadosUserLogado?.name} */}
                    </div>

                    {searchAnime.length <= 0 ? (
                        <div className="w-1/2 flex mx-auto rounded-xl"></div>
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
                            {/* <div className="text-white">
                                <Carousel itemsPerSlide={5}>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                </Carousel>
                            </div> */}

                            <div className="text-2xl font-bold">Categorias</div>

                            <div className="flex flex-wrap mx-auto py-10 gap-10">
                                {categorias.map((categoria: string) => {
                                    return (
                                        <Link href={`/categoria/${categoria}`}>
                                            <PrimaryButton hexadecimalColor="FF4655">
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
                                            link={`${popularData.id}`}
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
            <Content />
        </>
    );
};

export default App;
