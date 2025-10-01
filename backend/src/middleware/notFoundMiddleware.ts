import { Request, Response } from 'express';

/**
 * Middleware to handle 404 Not Found errors
 */
export const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    },
    timestamp: new Date().toISOString(),
  });
};
