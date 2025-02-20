import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/model/:path*",
        destination: "/src/app/assets/model/:path*",
      }
    ];
  },
};

export default nextConfig;
