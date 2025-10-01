import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse } from '../../../../utils/responseFormatter';
import { codeService } from '../../../../services/code';
import { BadRequestError, NotFoundError } from '../../../../middleware/errorMiddleware';

const languageParamSchema = z.object({
  language: z.string().min(1).max(50),
});

/**
 * @summary
 * Generates Hello World code for the specified programming language
 *
 * @function getHandler
 * @module code
 *
 * @param {string} language - Programming language identifier
 *
 * @returns {Object} Generated code with metadata
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { language } = languageParamSchema.parse(req.params);

    const code = await codeService.generateCode(language);
    if (!code) {
      throw new NotFoundError(`Language '${language}' not supported`);
    }

    res.json(successResponse(code));
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new BadRequestError('Invalid language parameter', error.format()));
    } else {
      next(error);
    }
  }
}

/**
 * @summary
 * Downloads Hello World code for the specified programming language as a file
 *
 * @function downloadHandler
 * @module code
 *
 * @param {string} language - Programming language identifier
 *
 * @returns {File} Downloadable code file
 */
export async function downloadHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { language } = languageParamSchema.parse(req.params);

    const codeFile = await codeService.generateCodeFile(language);
    if (!codeFile) {
      throw new NotFoundError(`Language '${language}' not supported`);
    }

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${codeFile.filename}"`);
    res.send(codeFile.content);
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new BadRequestError('Invalid language parameter', error.format()));
    } else {
      next(error);
    }
  }
}
