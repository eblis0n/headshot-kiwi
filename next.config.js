/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.headshotkiwi.com'],
    unoptimized: true,
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
