/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
        },
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
        }
      ],
    },
};

export default nextConfig;
