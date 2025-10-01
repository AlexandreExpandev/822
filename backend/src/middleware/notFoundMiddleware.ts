import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from './errorMiddleware';

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.originalUrl}`));
};
