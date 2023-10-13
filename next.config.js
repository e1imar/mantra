module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
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
