import Head from "next/head";
import CardAnimePadrao from "../../components/animes/CardAnimePadrao";
import MyPagination from "../../components/Layout/Pagination";

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
    const responseInfo = await fetch(
        `${process.env.BASE_URL_ANIME_API}?categoria=${params?.categoria}`
    );

    const infoData = await responseInfo.json();

    return {
        props: {
            animeInfo: infoData,
        },
        revalidate: 60,
    };
}

interface Prop {
    animeInfo: any;
}

export default function CategoriesList({ animeInfo }: Prop) {
    const urlImage = "https://cdn.appanimeplus.tk/img/";

    return (
        <>
            <Head>
                <title>Anime App</title>
            </Head>
            <MyPagination
                items={animeInfo.map((data: any) => {
                    return (
                        <>
                            <CardAnimePadrao
                                link={`/${data.id}`}
                                imageSrc={`${urlImage}${data.category_image}`}
                                id={data.id}
                                name={data.category_name}
                            />
                        </>
                    );
                })}
            />
        </>
    );
}
