/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.com",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  output: "standalone",
  serverExternalPackages: ["mongodb"],
};

export default nextConfig;
