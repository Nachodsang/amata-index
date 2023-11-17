/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.wsj.net",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
