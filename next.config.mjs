/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["media.graphassets.com", "lh3.googleusercontent.com"],
  },
  output: "standalone",
};

export default nextConfig;
