/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/louieknolle/venture-splorin",
        permanent: false,
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
};
