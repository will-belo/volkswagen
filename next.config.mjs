/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
        if (dev) {
          config.devtool = 'source-map'; // ou 'inline-source-map'
        }
        
        return config;
    },
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
