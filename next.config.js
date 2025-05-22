/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:34:09
 * @LastEditTime: 2025-05-22 16:47:18
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    domains: ['assets.headshotkiwi.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
