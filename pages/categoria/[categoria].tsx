import Head from "next/head";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import Navbar from "../../components/Layout/Navbar";

export async function getStaticPaths() {
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
    // CORRETO COM TODOS ANIMES
    // const request = await fetch(`https://appanimeplus.tk/play-api.php?search`);

    // const data = await request.json();

    // const paths = data.map((anime: any) => {
    //     const urlPaths = {
    //         params: { animeId: anime?.id },
    //     };

    //     return urlPaths;
    // });

    // const request = categorias.map((item) => {
    //     fetch(`https://appanimeplus.tk/play-api.php?categoria=${item}`)
    //         .then((response) => response.json())
    //         .then((result) => console.log(result));
    // });

    // const paths = request.map((anime: any) => {
    //     const urlPaths = {
    //         params: { categoria: String(anime?.id) },
    //     };

    //     return urlPaths;
    // });

    const paths = categorias.map((categoria: any) => {
        const urlPaths = {
            params: { categoria: categoria },
        };

        return urlPaths;
    });

    return {
        paths: paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }: any) {
    // const responseEps = await fetch(
    //     `https://appanimeplus.tk/play-api.php?cat_id=${params?.categoria}`
    // );
    // const dataEps = await responseEps.json();

    const responseInfo = await fetch(
        `https://appanimeplus.tk/play-api.php?categoria=${params?.categoria}`
    );

    const infoData = await responseInfo.json();

    return {
        props: {
            // epsData: dataEps,
            animeInfo: infoData,
        },
        revalidate: 60,
    };
}

interface Prop {
    // epsData: any;
    animeInfo: any;
}

export default function CategoriesList({ animeInfo }: Prop) {
    // console.log(epsData);
    console.log(animeInfo);
    const urlImage = "https://cdn.appanimeplus.tk/img/";
    return (
        <>
            <Head>
                <title>Anime App</title>
            </Head>
            <Navbar />
            <div className="flex flex-wrap w-full container mx-auto gap-10">
                {animeInfo.slice(0, 50).map((data: any) => {
                    return (
                        <>
                            <CardAnimePadrao
                                link={`/anime/${data.id}`}
                                imageSrc={`${urlImage}${data.category_image}`}
                                id={data.id}
                                name={data.category_name}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}
