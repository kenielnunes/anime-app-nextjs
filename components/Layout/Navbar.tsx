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
        <div className="right-0 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Categorias
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="flex flex-wrap px-1 py-1 ">
                            {categorias.map((item) => {
                                return (
                                    <>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    href={`/categoria/${item}`}
                                                >
                                                    <button
                                                        className={`${
                                                            active
                                                                ? "bg-violet-500 text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {item}
                                                    </button>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </>
                                );
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
