/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";

// import videojs from "video.js"; // version 7
// import "@videojs/http-streaming";
// import "video.js/dist/video-js.css";
import ModalEps from "../../components/ModalEps";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Head from "next/head";

const App = (props: any) => {
    const [animeData, setAnimeData] = useState<any>([]);
    console.log("🚀 ~ file: index.tsx:12 ~ App ~ animeData", animeData);
    const [stream, setStream] = useState("");
    const [videoId, setVideoId] = useState("");
    const urlImage = "https://cdn.appanimeplus.tk/img/";
    const [loading, setLoading] = useState(false);

    var requestOptions: any = {
        method: "GET",
        redirect: "follow",
    };

    const [epsList, setEpsList] = useState([]);
    console.log("🚀 ~ file: index.tsx:22 ~ App ~ epsList", epsList);

    //   useEffect(() => {
    //     animeData.map((anime: any) => {
    //       fetch(
    //         `https://appanimeplus.tk/play-api.php?cat_id=${anime.id}`,
    //         requestOptions
    //       )
    //         .then((response) => response.json())
    //         .then((result) => {
    //           console.log(result);
    //         })
    //         .catch((error) => console.log("error", error));
    //     });
    //   }, []);

    useEffect(() => {
        fetch("https://appanimeplus.tk/play-api.php?latest", requestOptions)
            .then((response) => response.json())
            .then((result) => setAnimeData(result))
            .catch((error) => console.log("error", error));
    }, []);

    function getVideo(idVideo: any) {
        fetch(`https://appanimeplus.tk/play-api.php?episodios=${idVideo}`)
            .then((response) => response.json())
            .then((result) => {
                setStream(result[0].locationsd);
            })
            .catch((error) => console.log("error", error));
    }

    // useEffect(() => {
    //     getIdVideo("485669");
    // }, []);

    function getEpsList(idAnime: string) {
        var requestOptions: any = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://appanimeplus.tk/play-api.php?cat_id=${idAnime}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setEpsList(result);
            })
            .catch((error) => console.log("error", error));
    }

    // useEffect(() => {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2500);
    // }, []);

    const Content = () => {
        return (
            <div className="flex mx-auto">
                {/* <div className="p-4">
                <input
                    // onChange={(e) => setSearch(e.target.value)}
                    className="p-4 rounded-2xl border  "
                    type="text"
                    placeholder="buscar"
                />
            </div> */}
                <div className="flex flex-wrap  gap-3 py-20">
                    {loading
                        ? animeData.map((item: any) => {
                              return (
                                  <>
                                      <Skeleton
                                          variant="rectangular"
                                          width="150px"
                                          height="190px"
                                      >
                                          <div />
                                      </Skeleton>
                                  </>
                              );
                          })
                        : animeData.map((data: any) => {
                              return (
                                  <a
                                      href={`episodio/${data.video_id}`}
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
                                      className="h-[300px] w-[250px] flex items-end rounded-lg opacity-90 hover:opacity-100 duration-300"
                                  >
                                      <div className="h-[25%] w-full bg-black bg-opacity-60 ">
                                          <div className="font-semibold text-white p-2 max-h-full overflow-y-auto">
                                              {data.title}
                                          </div>
                                      </div>
                                  </a>
                              );
                          })}
                </div>
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
