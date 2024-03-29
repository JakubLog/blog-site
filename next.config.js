/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'icon-library.com', 'cdn.iconscout.com']
  },
  webpack: (config) => {
    config.optimization.splitChunks.chunks = 'all';
    return config;
  },
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID
  },
  eslint: {
    ignoreDuringBuilds: true
  }
});
