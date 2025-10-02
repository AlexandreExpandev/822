import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000'),
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
