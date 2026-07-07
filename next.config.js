/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server Components by default
  experimental: {
    serverActions: true,
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  },
};

export default nextConfig;
