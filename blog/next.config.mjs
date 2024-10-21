/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/blog',
  output: 'export', // Enable static export for the application
};

export default nextConfig;
