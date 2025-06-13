import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "ak1944.pl" }, { hostname: "wp.ak1944.pl" }],
  },
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);
