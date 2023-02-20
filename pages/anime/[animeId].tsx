/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimesListOverflow from "../../components/AnimesListOverflow";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import InfoAnime from "../../components/InfoAnime";
import ModalEps from "../../components/ModalEps";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import { convertStringToSlug } from "../../utils/formatStrings";

export async function getStaticPaths() {
    const request = await fetch(
        `https://appanimeplus.tk/play-api.php?populares`
    );

    const data = await request.json();

    const paths = data.map((anime: any) => {
        const urlPaths = {
            params: { animeId: anime?.id },
        };

        return urlPaths;
    });

    return {
        paths: paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }: any) {
    const responseEps = await fetch(
        `https://appanimeplus.tk/play-api.php?cat_id=${params?.animeId}`
    );
    const dataEps = await responseEps.json();

    const responseInfo = await fetch(
        `https://appanimeplus.tk/play-api.php?info=${params?.animeId}`
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

export default function Anime({ epsData, animeInfo }: any) {
    const [stream, setStream] = useState("");
    const [idUser, setIdUser] = useState("");
    const [epsAssistidos, setEpsAssistidos] = useState<any>([]);

    const existeId = (ep: string) => {
        const existe = epsAssistidos.some(
            (episodioAssistido: { videoId: string }) =>
                episodioAssistido?.videoId == ep
        );
        if (existe) {
            return "Visto";
        } else {
            return "Marcar como visto";
        }
    };

    function verificaUuID(id: number) {
        const video = epsAssistidos.find(
            (x: { videoId: number }) => x?.videoId == id
        );
        return video?.id;
    }

    useEffect(() => {
        const storageId: any = localStorage.getItem("userId");
        setIdUser(storageId);
        const token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions: any = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(
            `https://api-project-vdlx.onrender.com/watched-videos/user/${storageId}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setEpsAssistidos(result.data);
            })
            .catch((error) => console.log("error", error));
    }, []);

    const urlImage = "https://cdn.appanimeplus.tk/img/";

    const categories = animeInfo[0].category_genres.split(",");

    const formatedCategories = categories.map(
        (category: string, index: number) => {
            return (
                <div
                    key={index}
                    className="border px-2 py-1 rounded-md cursor-default"
                >
                    {category}
                </div>
            );
        }
    );

    const [idVideoAtual, setVideoIdAtual] = useState("");

    function getVideo(idVideo: any) {
        fetch(`https://appanimeplus.tk/play-api.php?episodios=${idVideo}`)
            .then((response) => response.json())
            .then((result) => {
                setVideoIdAtual(idVideo);
                result[0].locationsd == ""
                    ? setStream(result[0].location)
                    : setStream(result[0].locationsd);
            })
            .catch((error) => console.log("error", error));
    }

    function setEpisodioAssistido(videoId: number, uuId: string) {
        const token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            videoId: videoId,
            userId: idUser,
        });

        if (existeId(String(videoId)) === "Visto") {
            const requestOptions: any = {
                method: "DELETE",
                headers: myHeaders,
                redirect: "follow",
            };
            fetch(
                `https://api-project-vdlx.onrender.com/watched-videos/${uuId}`,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    setEpsAssistidos(
                        epsAssistidos.filter(
                            (ep: { id: string }) => ep.id !== uuId
                        )
                    );
                })
                .catch((error) => console.log("error", error));
        } else {
            const requestOptions: any = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            fetch(
                "https://api-project-vdlx.onrender.com/watched-videos/",
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    setEpsAssistidos([...epsAssistidos, result.data]);
                })
                .catch((error) => console.log("error", error));
        }
    }

    const [filteredEps, setFilteredEps] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setFilteredEps(
            epsData.filter((ep: any) => ep.title.includes(search.toLowerCase()))
        );
    }, [search]);

    const [dataSelectedEp, setDataSelectedEp] = useState<any>([]);

    function setNextEp() {
        fetch(
            `https://appanimeplus.tk/play-api.php?episodios=${idVideoAtual}&catid=${animeInfo[0].id}&next`
        )
            .then((response) => response.json())
            .then((result) => {
                setDataSelectedEp(result[0]);
                setVideoIdAtual(result[0].video_id);
                result[0].locationsd == ""
                    ? setStream(result[0].location)
                    : setStream(result[0].locationsd);
            })
            .catch((error) => console.log("error", error));
    }

    return (
        <>
            <Head>
                <title>{animeInfo[0].category_name}</title>
            </Head>
            <div
                className={`text-white ${
                    filteredEps.length <= 3 ? "h-full" : "a"
                }`}
            >
                <div className="container mx-auto flex flex-col px-10 lg:px-24">
                    <div className="w-full pb-20">
                        <div className="flex justify-start items-center py-20">
                            <Link
                                href="/home"
                                className="px-4 py-2 bg-white text-black rounded-lg font-bold"
                            >
                                Voltar
                            </Link>
                        </div>
                        <InfoAnime
                            idAnime={animeInfo[0].id}
                            title={animeInfo[0].category_name}
                            year={animeInfo[0].ano}
                            quality={"HD"}
                            sinopse={animeInfo[0].category_description}
                            categories={formatedCategories}
                            numberEps={epsData.length}
                            banner={`${urlImage}${animeInfo[0].category_image}`}
                        />
                        <div className="w-full p-10 rounded-md bg-[#2D2C33] ">
                            <div className="text-black pb-10">
                                <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full p-3 rounded-sm"
                                    type="text"
                                    placeholder="Pesquisar por episódio..."
                                />
                            </div>
                            <div className="max-h-[500px]  flex flex-col-reverse overflow-y-auto divide-y-2 ">
                                {filteredEps.length > 0
                                    ? filteredEps.map(
                                          (episodio: any, index) => {
                                              return (
                                                  <>
                                                      <div
                                                          key={index}
                                                          className="flex  flex-col gap-4 md:flex-row justify-between items-center font-semibold py-4 px-2"
                                                      >
                                                          <div>
                                                              {episodio.title}
                                                          </div>
                                                          <div className="flex  flex-col md:flex-row gap-6">
                                                              <PrimaryButton
                                                                  hexadecimalColor="0B0B29"
                                                                  dataBsTarget={`#${convertStringToSlug(
                                                                      episodio.title
                                                                  )}`}
                                                                  onClick={() => {
                                                                      setEpisodioAssistido(
                                                                          Number(
                                                                              episodio.video_id
                                                                          ),
                                                                          verificaUuID(
                                                                              episodio.video_id
                                                                          )
                                                                      );
                                                                  }}
                                                              >
                                                                  {existeId(
                                                                      episodio.video_id
                                                                  )}
                                                              </PrimaryButton>
                                                              <PrimaryButton
                                                                  hexadecimalColor="FF4655"
                                                                  dataBsTarget={`#${convertStringToSlug(
                                                                      episodio.title
                                                                  )}`}
                                                                  dataBsToggle="modal"
                                                                  onClick={() => {
                                                                      getVideo(
                                                                          episodio.video_id
                                                                      );
                                                                  }}
                                                              >
                                                                  Assistir
                                                              </PrimaryButton>
                                                          </div>
                                                      </div>
                                                      <ModalEps
                                                          srcVideo={stream}
                                                          idModal={convertStringToSlug(
                                                              episodio.title
                                                          )}
                                                          closeStream={() =>
                                                              setStream("")
                                                          }
                                                          epTitle={
                                                              episodio.title
                                                          }
                                                          setBeforeEp={""}
                                                          setNextEp={() =>
                                                              setNextEp()
                                                          }
                                                      />
                                                  </>
                                              );
                                          }
                                      )
                                    : "Episódio não encontrado"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
