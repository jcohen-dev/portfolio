import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  basePath: isStaticExport ? "/Portfolio" : "",
  assetPrefix: isStaticExport ? "/Portfolio" : "",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
