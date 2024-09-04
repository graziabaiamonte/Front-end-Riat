/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.riatarchidecor.it",
        pathname: "/wp/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
