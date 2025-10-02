import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

/**
 * Request validation middleware
 */
export function validationMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Basic validation to ensure request body exists
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Request body is required',
      },
      timestamp: new Date().toISOString(),
    });
  }

  // Continue to the next middleware
  next();
}
