module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    // HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    // HOST_API_KEY: 'product_site/?&token=2b4a5a62-1238-47f7-9cd3-fdabbba0f172%3ALiYP5ZbIsTuDZe0h4c6VZ5NZFS2ls-wRc89eU0Nvvts',
    HOST_API_KEY: 'http://bmsys.net:8000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themantra.ru',
        pathname: '/media/products/**'
      },
    ],
  },
};
