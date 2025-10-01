import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../../../../utils/responseFormatter';
import { languageService } from '../../../../services/language';

/**
 * @summary
 * Lists all available programming languages for Hello World code generation
 *
 * @function listHandler
 * @module language
 *
 * @returns {Array} List of available programming languages
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const languages = await languageService.listLanguages();
    res.json(successResponse(languages));
  } catch (error) {
    next(error);
  }
}
