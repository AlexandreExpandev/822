import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const config = {
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    environment: process.env.NODE_ENV || 'development',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
