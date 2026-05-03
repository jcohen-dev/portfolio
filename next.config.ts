import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  basePath: isStaticExport ? "/portfolio" : "",
  assetPrefix: isStaticExport ? "/portfolio" : "",
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isStaticExport ? "/portfolio" : "",
  },
};

export default nextConfig;
