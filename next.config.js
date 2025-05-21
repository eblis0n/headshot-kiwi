/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:33:58
 * @LastEditTime: 2025-05-21 18:29:46
 */
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
