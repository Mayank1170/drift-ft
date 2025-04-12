import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false
      };
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: [
      '@coral-xyz/anchor',
      '@drift-labs/sdk',
      '@solana/web3.js'
    ]
  }
};

export default nextConfig;
