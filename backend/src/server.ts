import express from 'express';
import { config } from './config';
import { logger } from './utils/logger';
import { errorMiddleware } from './middleware/errorMiddleware';
import { notFoundMiddleware } from './middleware/notFoundMiddleware';
import routes from './routes';

// Initialize express app
const app = express();

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply routes
app.use('/api', routes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Start server
const server = app.listen(config.server.port, () => {
  logger.info(`Server running on port ${config.server.port} in ${config.server.environment} mode`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

export default app;
