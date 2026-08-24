import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a unique build ID on every dev restart so the browser
  // always fetches fresh JS/CSS bundles instead of serving stale cached ones.
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
