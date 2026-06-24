import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Local + webp: skip optimizer (avoids dev SSL issues and webp handling quirks)
    unoptimized: true,
  },
};

export default nextConfig;
