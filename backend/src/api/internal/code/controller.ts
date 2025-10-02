import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { generateCode, getCodeForDownload } from '../../../services/code';
import { languageGet } from '../../../services/language';
import { successResponse, errorResponse } from '../../../utils/responseFormatter';

/**
 * @api {post} /api/code/generate Generate Code
 * @apiName GenerateCode
 * @apiGroup Code
 * @apiVersion 1.0.0
 *
 * @apiDescription Generates Hello World code in the specified programming language
 *
 * @apiParam {Number} languageId Language identifier
 *
 * @apiSuccess {Object} data Generated code object
 * @apiSuccess {Number} data.languageId Language identifier
 * @apiSuccess {String} data.languageName Language name
 * @apiSuccess {String} data.code Generated code
 * @apiSuccess {String} data.extension File extension
 *
 * @apiError {String} ValidationError Invalid parameters
 * @apiError {String} NotFoundError Language not found
 */
export async function generateHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const bodySchema = z.object({
      languageId: z.number(),
    });

    const body = bodySchema.safeParse(req.body);

    if (!body.success) {
      return res.status(400).json(errorResponse('Invalid request parameters'));
    }

    const language = await languageGet(body.data.languageId);

    if (!language) {
      return res.status(404).json(errorResponse('Language not found'));
    }

    const generatedCode = await generateCode(body.data.languageId);
    res.json(successResponse(generatedCode));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @api {get} /api/code/download/:languageId Download Code
 * @apiName DownloadCode
 * @apiGroup Code
 * @apiVersion 1.0.0
 *
 * @apiDescription Downloads Hello World code file in the specified programming language
 *
 * @apiParam {Number} languageId Language identifier
 *
 * @apiSuccess {File} data Code file for download
 *
 * @apiError {String} NotFoundError Language not found
 */
export async function downloadHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const paramsSchema = z.object({
      languageId: z.coerce.number(),
    });

    const params = paramsSchema.safeParse(req.params);

    if (!params.success) {
      return res.status(400).json(errorResponse('Invalid language ID'));
    }

    const language = await languageGet(params.data.languageId);

    if (!language) {
      return res.status(404).json(errorResponse('Language not found'));
    }

    const { code, fileName } = await getCodeForDownload(params.data.languageId);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.send(code);
  } catch (error: any) {
    next(error);
  }
}
