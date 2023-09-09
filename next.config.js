/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  // serverDataTimeout: 160000
  staticPageGenerationTimeout: 10000,
  cache: {
    size: 100 * 1024 * 1024, // Maximum cache size in bytes (e.g., 100 MB)
  },
  env: {
    debug: false,
  },

  async redirects() {
    return [
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/registerinfo",
        destination: "/register",
        permanent: true,
      },
      {
        source: "/register/startnow",
        destination: "/register",
        permanent: true,
      },
    ];
  },
};

// module.exports = {
//   // time in seconds of no pages generating during static
//   // generation before timing out
//   staticPageGenerationTimeout: 1000,
// }

module.exports = nextConfig;
