import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ApiError } from '../utils/errors';

/**
 * Middleware factory for request validation using Zod schemas
 * @param schema Zod schema to validate against
 * @param source Request property to validate (body, params, query)
 */
export const validate = (schema: z.ZodSchema, source: 'body' | 'params' | 'query' = 'body') => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await schema.parseAsync(req[source]);
      req[source] = data;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        next(new ApiError(400, 'VALIDATION_ERROR', error.message));
      } else {
        next(error);
      }
    }
  };
};
