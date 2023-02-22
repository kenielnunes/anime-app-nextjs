/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },

    images: {
        domains: ["storage.googleapis.com"],
    },
    env: {
        BASE_URL_ANIME_API: process.env.BASE_URL_ANIME_API,
        BASE_URL_API_USERS: process.env.BASE_URL_API_USERS,
    },

    output: "standalone",

    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
