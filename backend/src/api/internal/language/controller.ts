import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse } from '../../../utils/responses';
import { ApiError } from '../../../utils/errors';
import { languageService } from '../../../services/language';

// Validation schema for language creation/update
const languageSchema = z.object({
  name: z.string().min(1).max(100),
  displayName: z.string().min(1).max(100),
  fileExtension: z.string().min(1).max(20),
  active: z.boolean().default(true),
});

// Validation schema for language ID parameter
const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

/**
 * @summary
 * Lists all programming languages
 *
 * @function listHandler
 * @module language
 *
 * @returns {Array} List of programming languages
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const languages = await languageService.listLanguages();
    res.json(successResponse(languages));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Creates a new programming language
 *
 * @function createHandler
 * @module language
 *
 * @param {Object} body - Language data
 * @param {string} body.name - Language identifier
 * @param {string} body.displayName - Display name
 * @param {string} body.fileExtension - File extension
 * @param {boolean} body.active - Active status
 *
 * @returns {Object} Created language
 */
export async function createHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Validate request body
    const languageData = await languageSchema.parseAsync(req.body);

    // Create language
    const language = await languageService.createLanguage(languageData);

    res.status(201).json(successResponse(language));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Retrieves a programming language by ID
 *
 * @function getHandler
 * @module language
 *
 * @param {number} id - Language ID
 *
 * @returns {Object} Language details
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Validate ID parameter
    const { id } = await idParamSchema.parseAsync(req.params);

    // Get language by ID
    const language = await languageService.getLanguageById(id);

    if (!language) {
      throw ApiError.notFound(`Language with ID ${id} not found`);
    }

    res.json(successResponse(language));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Updates a programming language
 *
 * @function updateHandler
 * @module language
 *
 * @param {number} id - Language ID
 * @param {Object} body - Updated language data
 *
 * @returns {Object} Updated language
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
    const languageData = await languageSchema.parseAsync(req.body);

    // Update language
    const language = await languageService.updateLanguage(id, languageData);

    if (!language) {
      throw ApiError.notFound(`Language with ID ${id} not found`);
    }

    res.json(successResponse(language));
  } catch (error) {
    next(error);
  }
}

/**
 * @summary
 * Deletes a programming language
 *
 * @function deleteHandler
 * @module language
 *
 * @param {number} id - Language ID
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

    // Delete language
    const success = await languageService.deleteLanguage(id);

    if (!success) {
      throw ApiError.notFound(`Language with ID ${id} not found`);
    }

    res.json(successResponse({ message: 'Language deleted successfully' }));
  } catch (error) {
    next(error);
  }
}
