/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["suplari.com", "www.themoviedb.org", "assets-in.bmscdn.com"],
  },
};

module.exports = nextConfig;
