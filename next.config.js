/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        // port: '3000',
        // pathname: '/products',
      },
    ],
  }
}

module.exports = nextConfig
