const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'serverless',
  env: {
    NEXT_PUBLIC_API_URL
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  },
  assetPrefix: isDev ? '' : '/next-fiveN1/dist'
};
