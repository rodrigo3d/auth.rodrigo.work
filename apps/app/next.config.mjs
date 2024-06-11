/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@rise/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
