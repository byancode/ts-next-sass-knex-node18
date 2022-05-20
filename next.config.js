const path = require('path')

const sassOptions = {
  includePaths: [
    path.join(__dirname, 'styles'),
    path.join(__dirname, 'components'),
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions,
};

module.exports = nextConfig
