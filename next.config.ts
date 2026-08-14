import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "statute-cosigner-library.ngrok-free.dev",
    "172.16.0.2",
    "localhost:3000",
    "127.0.0.1:3000"
  ],
};

export default nextConfig;
