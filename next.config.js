const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

module.exports = {
  target: 'serverless',
  env: {
    NEXT_PUBLIC_API_URL
  }
};
