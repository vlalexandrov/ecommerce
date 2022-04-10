const apiConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
};

const publicRuntimeConfig = {
  apiConfig,
};

module.exports = {
  publicRuntimeConfig,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
