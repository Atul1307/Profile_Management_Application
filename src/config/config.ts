interface Config {
  apiBaseUrl: string;
  environment: string;
}

const config: Config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  environment: process.env.REACT_APP_ENV || 'development',
};

export default config;
