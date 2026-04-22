import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["balosh.local"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "balosh.com", pathname: "/wp-content/**" },
    ],
  },
}

export default nextConfig
