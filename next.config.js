/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'icon-library.com', 'cdn.iconscout.com']
  },
  webpack: (config) => {
    config.optimization.splitChunks.chunks = 'all';
    return config;
  }
};
