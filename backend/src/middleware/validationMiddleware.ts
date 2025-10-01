import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { BadRequestError } from './errorMiddleware';

export const validateRequest = (
  schema: AnyZodObject,
  source: 'body' | 'query' | 'params' = 'body'
) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await schema.parseAsync(req[source]);
      req[source] = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(new BadRequestError('Validation failed', error.format()));
      } else {
        next(error);
      }
    }
  };
};
