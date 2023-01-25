/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Example() {
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

    useEffect(() => {
        // const fetchWeather = async () => {
        //     // begin the asynchronous operations
        //     const promises = categorias.map((item) => {
        //         fetch(`https://appanimeplus.tk/play-api.php?categoria=${item}`)
        //             .then((response) => response.json())
        //             .then((result) => {
        //                 return result;
        //             });
        //     });
        //     const results = await Promise.all(promises);
        //     console.log(
        //         "🚀 ~ file: Navbar.tsx:55 ~ fetchWeather ~ results",
        //         results
        //     );
        //     // update state with the results
        //     return results;
        // };
        // fetchWeather();
        // const request = categorias.map((item) => {
        //     fetch(`https://appanimeplus.tk/play-api.php?categoria=${item}`)
        //         .then((response) => response.json())
        //         .then((result) => {
        //             return result;
        //         });
        // });
        // console.log("🚀 ~ file: Navbar.tsx:56 ~ request ~ request", request);
        // const paths = request.map((anime: any) => {
        //     const urlPaths = {
        //         params: { categoria: String(anime) },
        //     };
        //     return urlPaths;
        // });
        // console.log("🚀 ~ file: Navbar.tsx:62 ~ paths ~ paths", paths);
    }, []);

    return (
        <></>
        // <div className="bg-[#0B0B29]">
        //     <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        //         <div className="text-lg font-bold md:py-0 py-4">Logo</div>
        //         <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        //             <li>
        //                 <a
        //                     href="#"
        //                     className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
        //                 >
        //                     <span>Home</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a
        //                     href="#"
        //                     className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
        //                 >
        //                     <span>Products</span>
        //                 </a>
        //             </li>
        //             <li className="relative parent">
        //                 <a
        //                     href="#"
        //                     className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
        //                 >
        //                     <span>Service</span>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="w-4 h-4 fill-current pt-1"
        //                         viewBox="0 0 24 24"
        //                     >
        //                         <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        //                     </svg>
        //                 </a>
        //                 <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#0B0B29] md:shadow-lg md:rounded-b ">
        //                     <li>
        //                         <a
        //                             href="#"
        //                             className="flex px-4 py-3 hover:bg-[#0B0B29]"
        //                         >
        //                             Web development
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a
        //                             href="#"
        //                             className="flex px-4 py-3 hover:bg-[#0B0B29]"
        //                         >
        //                             Web Design
        //                         </a>
        //                     </li>
        //                     <li>
        //                         <a
        //                             href="#"
        //                             className="flex px-4 py-3 hover:bg-[#0B0B29]"
        //                         >
        //                             Machine Learning
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <a
        //                     href="#"
        //                     className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
        //                 >
        //                     <span>About us</span>
        //                 </a>
        //             </li>
        //         </ul>
        //         <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className="w-5 h-5 fill-current"
        //                 viewBox="0 0 24 24"
        //             >
        //                 <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        //             </svg>
        //         </div>
        //     </nav>
        // </div>
    );
}
