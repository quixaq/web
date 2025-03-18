import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/web",
    output: "export",
    images: {
        unoptimized: true
    }
}

export default nextConfig;
