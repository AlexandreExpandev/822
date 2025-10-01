import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse } from '../../../../utils/responses';
import { ApiError } from '../../../../utils/errors';
import { codeService } from '../../../../services/code';

// Validation schema for language parameter
const languageParamSchema = z.object({
  language: z.string().min(1).max(50),
});

/**
 * @summary
 * Retrieves Hello World code for the specified programming language
 *
 * @function getHandler
 * @module code
 *
 * @param {string} language - Programming language identifier
 *
 * @returns {Object} Hello World code for the specified language
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Validate language parameter
    const { language } = await languageParamSchema.parseAsync(req.params);

    // Get code for the specified language
    const code = await codeService.getCodeByLanguage(language);

    if (!code) {
      throw ApiError.notFound(`Code for language '${language}' not found`);
    }

    res.json(successResponse(code));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Downloads Hello World code for the specified programming language
 *
 * @function downloadHandler
 * @module code
 *
 * @param {string} language - Programming language identifier
 *
 * @returns {File} Downloadable file with Hello World code
 */
export async function downloadHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validate language parameter
    const { language } = await languageParamSchema.parseAsync(req.params);

    // Get code and file information for the specified language
    const codeData = await codeService.getCodeByLanguage(language);

    if (!codeData) {
      throw ApiError.notFound(`Code for language '${language}' not found`);
    }

    // Set headers for file download
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="HelloWorld.${codeData.fileExtension}"`
    );

    // Send the code content as the response
    res.send(codeData.code);
  } catch (error) {
    next(error);
  }
}
