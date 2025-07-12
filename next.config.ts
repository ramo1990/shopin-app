import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000", // important si ton backend tourne sur ce port
        pathname: "/**", // autorise toutes les images
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // si tu utilises Google Auth ou images Google
        pathname: "/**",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // backend Django en dev
        pathname: "/**",
      }
    ],
  },

};

export default nextConfig;
