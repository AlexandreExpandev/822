import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { languageList, languageGet } from '../../../services/language';
import { successResponse, errorResponse } from '../../../utils/responseFormatter';

/**
 * @api {get} /api/languages List Languages
 * @apiName ListLanguages
 * @apiGroup Language
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves a list of all supported programming languages
 *
 * @apiSuccess {Object[]} data List of language objects
 * @apiSuccess {Number} data.id Language identifier
 * @apiSuccess {String} data.name Language name
 * @apiSuccess {String} data.extension File extension
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const languages = await languageList();
    res.json(successResponse(languages));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @api {get} /api/languages/:id Get Language
 * @apiName GetLanguage
 * @apiGroup Language
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves details for a specific programming language
 *
 * @apiParam {Number} id Language identifier
 *
 * @apiSuccess {Object} data Language object
 * @apiSuccess {Number} data.id Language identifier
 * @apiSuccess {String} data.name Language name
 * @apiSuccess {String} data.extension File extension
 *
 * @apiError {String} NotFoundError Language not found
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const params = paramsSchema.safeParse(req.params);

    if (!params.success) {
      return res.status(400).json(errorResponse('Invalid language ID'));
    }

    const language = await languageGet(params.data.id);

    if (!language) {
      return res.status(404).json(errorResponse('Language not found'));
    }

    res.json(successResponse(language));
  } catch (error: any) {
    next(error);
  }
}
