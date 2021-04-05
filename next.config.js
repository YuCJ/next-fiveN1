const API_URL = process.env.API_URL || 'http://localhost:8000';

module.exports = {
  target: 'serverless',
  env: {
    API_URL,
  }
};
