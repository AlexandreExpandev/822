import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export interface AppError extends Error {
  statusCode?: number;
  details?: unknown;
}

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error
  logger.error(`${statusCode} - ${message}`, {
    path: req.path,
    method: req.method,
    error: err.stack,
    details: err.details,
  });

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
      ...(err.details && { details: err.details }),
    },
    timestamp: new Date().toISOString(),
  });
};

export class BadRequestError extends Error implements AppError {
  statusCode = 400;
  constructor(message: string, public details?: unknown) {
    super(message);
    this.name = 'BadRequestError';
  }
}

export class NotFoundError extends Error implements AppError {
  statusCode = 404;
  constructor(message: string, public details?: unknown) {
    super(message);
    this.name = 'NotFoundError';
  }
}
