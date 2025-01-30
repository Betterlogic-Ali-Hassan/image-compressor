import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'savemp3.net',
      },
    ],
  },
};

export default nextConfig;
