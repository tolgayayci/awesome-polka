/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@lens-protocol'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig