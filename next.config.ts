import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    APP_URL: process.env.APP_ENV,
    APP_DOMAIN: process.env.APP_ENV,
  },
};

export default nextConfig;
