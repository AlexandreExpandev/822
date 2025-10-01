import { codeTypes } from './codeTypes';
import { languageService } from '../language';
import { NotFoundError } from '../../middleware/errorMiddleware';

/**
 * Service for generating Hello World code in different programming languages
 */
export const codeService = {
  /**
   * Generates Hello World code for a specific programming language
   * @param languageId Language identifier
   * @returns Code object with content and metadata
   */
  generateCode: async (languageId: string): Promise<codeTypes.CodeResponse> => {
    const language = await languageService.getLanguageById(languageId);
    if (!language) {
      throw new NotFoundError(`Language '${languageId}' not supported`);
    }

    const codeTemplate = codeTypes.CODE_TEMPLATES[languageId];
    if (!codeTemplate) {
      throw new NotFoundError(`No template available for language '${languageId}'`);
    }

    return {
      language: language.name,
      content: codeTemplate,
      extension: language.extension,
    };
  },

  /**
   * Generates a downloadable file with Hello World code
   * @param languageId Language identifier
   * @returns File object with content and filename
   */
  generateCodeFile: async (languageId: string): Promise<codeTypes.CodeFile> => {
    const language = await languageService.getLanguageById(languageId);
    if (!language) {
      throw new NotFoundError(`Language '${languageId}' not supported`);
    }

    const codeTemplate = codeTypes.CODE_TEMPLATES[languageId];
    if (!codeTemplate) {
      throw new NotFoundError(`No template available for language '${languageId}'`);
    }

    return {
      content: codeTemplate,
      filename: `hello_world.${language.extension}`,
    };
  },
};
