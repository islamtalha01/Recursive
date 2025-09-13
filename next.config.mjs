/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ai-agency",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
