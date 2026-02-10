import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bjwlzqryc3kj3ybt.public.blob.vercel-storage.com",
        port: "", // no port needed
        pathname: "/**", // allow all paths under this host
      },
    ],
  },
};

export default nextConfig;
