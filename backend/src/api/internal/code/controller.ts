import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse } from '../../../utils/responses';
import { ApiError } from '../../../utils/errors';
import { codeService } from '../../../services/code';

// Validation schema for code creation/update
const codeSchema = z.object({
  languageId: z.number().int().positive(),
  code: z.string().min(1),
  description: z.string().optional(),
});

// Validation schema for code ID parameter
const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

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
 * Creates a new Hello World code entry
 *
 * @function createHandler
 * @module code
 *
 * @param {Object} body - Code data
 * @param {number} body.languageId - Language ID
 * @param {string} body.code - Hello World code
 * @param {string} body.description - Optional description
 *
 * @returns {Object} Created code entry
 */
export async function createHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validate request body
    const codeData = await codeSchema.parseAsync(req.body);

    // Create code entry
    const code = await codeService.createCode(codeData);

    res.status(201).json(successResponse(code));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Updates a Hello World code entry
 *
 * @function updateHandler
 * @module code
 *
 * @param {number} id - Code entry ID
 * @param {Object} body - Updated code data
 *
 * @returns {Object} Updated code entry
 */
export async function updateHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validate ID parameter
    const { id } = await idParamSchema.parseAsync(req.params);

    // Validate request body
    const codeData = await codeSchema.parseAsync(req.body);

    // Update code entry
    const code = await codeService.updateCode(id, codeData);

    if (!code) {
      throw ApiError.notFound(`Code entry with ID ${id} not found`);
    }

    res.json(successResponse(code));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Deletes a Hello World code entry
 *
 * @function deleteHandler
 * @module code
 *
 * @param {number} id - Code entry ID
 *
 * @returns {Object} Deletion confirmation
 */
export async function deleteHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validate ID parameter
    const { id } = await idParamSchema.parseAsync(req.params);

    // Delete code entry
    const success = await codeService.deleteCode(id);

    if (!success) {
      throw ApiError.notFound(`Code entry with ID ${id} not found`);
    }

    res.json(successResponse({ message: 'Code entry deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
