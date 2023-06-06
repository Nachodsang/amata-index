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
};

module.exports = nextConfig;
