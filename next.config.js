/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/amazon", // Adjust for GitHub Pages
  // assetPrefix: "/amazon/", // Ensure assets load correctly
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
