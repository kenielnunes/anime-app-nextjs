/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["storage.googleapis.com"],
  },

  output: "standalone",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
