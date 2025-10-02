import { languageGet } from '../language';
import { codeTemplates } from './codeTemplates';

/**
 * Generates Hello World code for the specified programming language
 *
 * @param languageId - Language identifier
 * @returns Generated code object with language details
 */
export async function generateCode(languageId: number): Promise<GeneratedCode> {
  const language = await languageGet(languageId);

  if (!language) {
    throw new Error('Language not found');
  }

  const template = codeTemplates[language.name];

  if (!template) {
    throw new Error(`Template not available for ${language.name}`);
  }

  return {
    languageId: language.id,
    languageName: language.displayName,
    code: template,
    extension: language.extension,
  };
}

/**
 * Prepares code for download with appropriate filename
 *
 * @param languageId - Language identifier
 * @returns Code content and filename
 */
export async function getCodeForDownload(
  languageId: number
): Promise<{ code: string; fileName: string }> {
  const generatedCode = await generateCode(languageId);
  const fileName = `HelloWorld.${generatedCode.extension}`;

  return {
    code: generatedCode.code,
    fileName,
  };
}
