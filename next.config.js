/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  // basePath:  "/amazon", // Adjust basePath for GitHub Pages
  // assetPrefix:  "/amazon/", // Adjust assetPrefix for GitHub Pages
  images: {
    unoptimized: true, // Ensures compatibility with static export
  },
};

module.exports = nextConfig;


// basePath: process.env.GITHUB_PAGES ? "/amazon" : "", // Adjust basePath for GitHub Pages
  // assetPrefix: process.env.GITHUB_PAGES ? "/amazon/" : "", // Adjust assetPrefix for GitHub Pages