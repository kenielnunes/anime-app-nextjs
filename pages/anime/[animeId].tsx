/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimesListOverflow from "../../components/AnimesListOverflow";
import InfoAnime from "../../components/InfoAnime";
import ModalEps from "../../components/ModalEps";

export async function getStaticPaths() {
    // CORRETO COM TODOS ANIMES
    // const request = await fetch(`https://appanimeplus.tk/play-api.php?search`);

    // const data = await request.json();

    // const paths = data.map((anime: any) => {
    //     const urlPaths = {
    //         params: { animeId: anime?.id },
    //     };

    //     return urlPaths;
    // });

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
        fallback: false,
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

export default function Post({ epsData, animeInfo }: any) {
    console.log(epsData);
    console.log(animeInfo);

    const [stream, setStream] = useState("");
    const [videoId, setVideoId] = useState("");

    const urlImage = "https://cdn.appanimeplus.tk/img/";

    function convertStringToSlug(string: string) {
        string = string.replace(/^\s+|\s+$/g, "");
        string = string.toLowerCase();

        const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        const to = "aaaaeeeeiiiioooouuuunc------";

        for (let i = 0, l = from.length; i < l; i++) {
            string = string.replace(
                new RegExp(from.charAt(i), "g"),
                to.charAt(i)
            );
        }

        string = string
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        return string;
    }

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

    const [idVideoAtual, setVideoIdAtual] = useState("");
    // console.log(
    //     "🚀 ~ file: [animeId].tsx:95 ~ Post ~ idVideoAtual",
    //     idVideoAtual
    // );

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
                // console.log(
                //     "🚀 ~ file: [animeId].tsx:128 ~ .then ~ result",
                //     result
                // );
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
                className={`bg-[#131219] text-white ${
                    filteredEps.length <= 3 ? "h-full" : "a"
                }`}
            >
                <div className="container mx-auto flex flex-col px-24">
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
                                    className="w-full p-3"
                                    type="text"
                                    placeholder="Pesquisar por episódio..."
                                />
                            </div>
                            <div className="max-h-[500px] flex flex-col-reverse overflow-y-auto divide-y-2 ">
                                {filteredEps.length > 0
                                    ? filteredEps.map((episodio: any) => {
                                          return (
                                              <>
                                                  <div className="flex justify-between items-center font-semibold py-4 px-2">
                                                      <div className="">
                                                          {episodio.title}
                                                      </div>
                                                      <div className="flex gap-6">
                                                          {/* <button className="rounded-md bg-[#26A85A]  px-4">
                                                  Visto
                                              </button> */}
                                                          <button
                                                              data-bs-toggle="modal"
                                                              data-bs-target={`#${convertStringToSlug(
                                                                  episodio.title
                                                              )}`}
                                                              onClick={() => {
                                                                  getVideo(
                                                                      episodio.video_id
                                                                  );
                                                                  setVideoId(
                                                                      convertStringToSlug(
                                                                          episodio.title
                                                                      )
                                                                  );
                                                              }}
                                                              className="rounded-md bg-[#16308A] px-4 py-2"
                                                          >
                                                              Assistir
                                                          </button>
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
                                                      epTitle={episodio.title}
                                                      setBeforeEp={""}
                                                      setNextEp={() =>
                                                          setNextEp()
                                                      }
                                                  />
                                              </>
                                          );
                                      })
                                    : epsData.map((episodio: any) => {
                                          return (
                                              <>
                                                  <div className="flex justify-between items-center font-semibold py-4 px-2">
                                                      <div className="">
                                                          {episodio.title}
                                                      </div>
                                                      <div className="flex gap-6">
                                                          {/* <button className="rounded-md bg-[#26A85A]  px-4">
                                                    Visto
                                                </button> */}
                                                          <button
                                                              data-bs-toggle="modal"
                                                              data-bs-target={`#${convertStringToSlug(
                                                                  episodio.title
                                                              )}`}
                                                              onClick={() => {
                                                                  getVideo(
                                                                      episodio.video_id
                                                                  );
                                                                  setVideoId(
                                                                      convertStringToSlug(
                                                                          episodio.title
                                                                      )
                                                                  );
                                                              }}
                                                              className="rounded-md bg-[#16308A] px-4 py-2"
                                                          >
                                                              Assistir
                                                          </button>
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
                                                      epTitle={episodio.title}
                                                      setBeforeEp={undefined}
                                                      setNextEp={undefined}
                                                  />
                                                  {/* {dataSelectedEp != null ? (
                                                      <ModalEps
                                                          srcVideo={stream}
                                                          idModal={convertStringToSlug(
                                                              dataSelectedEp.title
                                                          )}
                                                          closeStream={() =>
                                                              setStream("")
                                                          }
                                                          epTitle={
                                                              dataSelectedEp.title
                                                          }
                                                          setBeforeEp={
                                                              undefined
                                                          }
                                                          setNextEp={undefined}
                                                      />
                                                  ) : (
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
                                                          setBeforeEp={
                                                              undefined
                                                          }
                                                          setNextEp={undefined}
                                                      />
                                                  )} */}
                                              </>
                                          );
                                      })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
