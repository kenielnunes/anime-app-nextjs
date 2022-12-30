import React, { useEffect, useState } from "react";

// import { Container } from './styles';

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

    const array: any[] = [];

    request.map((data: any) => {
        fetch(`https://appanimeplus.tk/play-api.php?cat_id=${data?.id}`)
            .then((response) => response.json())
            .then((result) => {
                // result.map((data: any) => {
                //     data.video_id;
                // });
                result.map((data: any) => array.push({ data: data.video_id }));
            })
            .catch((error) => console.log("error", error));
    });

    console.log("🚀 ~ file: [animeId].tsx:93 ~ xesq ~ xesq", array[0]);

    // const paths = xesq.map((anime: any) => {
    //     anime;
    // });
    // console.log(paths);

    return {
        paths: [],

        fallback: false,
    };
}

Dale();

export const dataAnimesId = [
    {
        data: "data",
    },
];
