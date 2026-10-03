import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old IDE-theme routes now live as anchors on the home page.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/skills", destination: "/#tools", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#about", permanent: true },
    ];
  },
};

export default nextConfig;
