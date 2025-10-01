import { codeTypes } from './codeTypes';
import { languageService } from '../language';

// In-memory storage for code entries
let codeEntries: codeTypes.CodeEntry[] = [
  {
    id: 1,
    languageId: 1,
    code: 'console.log("Hello, World!");',
    description: 'Simple JavaScript Hello World',
  },
  {
    id: 2,
    languageId: 2,
    code: 'print("Hello, World!")',
    description: 'Python Hello World',
  },
  {
    id: 3,
    languageId: 3,
    code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    description: 'Java Hello World class',
  },
  {
    id: 4,
    languageId: 4,
    code: 'using System;\n\nnamespace HelloWorld\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello, World!");\n        }\n    }\n}',
    description: 'C# Hello World program',
  },
  {
    id: 5,
    languageId: 5,
    code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    description: 'C++ Hello World program',
  },
];

/**
 * Gets Hello World code for a specific language
 */
const getCodeByLanguage = async (languageName: string): Promise<codeTypes.CodeResponse | null> => {
  // Get language by name
  const language = await languageService.getLanguageByName(languageName);
  if (!language) {
    return null;
  }

  // Find code entry for the language
  const codeEntry = codeEntries.find((entry) => entry.languageId === language.id);
  if (!codeEntry) {
    return null;
  }

  // Return code with language information
  return {
    id: codeEntry.id,
    language: language.name,
    displayName: language.displayName,
    fileExtension: language.fileExtension,
    code: codeEntry.code,
    description: codeEntry.description,
  };
};

/**
 * Gets a code entry by ID
 */
const getCodeById = async (id: number): Promise<codeTypes.CodeEntry | null> => {
  const codeEntry = codeEntries.find((entry) => entry.id === id);
  return codeEntry || null;
};

/**
 * Creates a new code entry
 */
const createCode = async (data: codeTypes.CreateCodeInput): Promise<codeTypes.CodeEntry> => {
  // Check if language exists
  const language = await languageService.getLanguageById(data.languageId);
  if (!language) {
    throw new Error(`Language with ID ${data.languageId} not found`);
  }

  // Check if code for this language already exists
  const existingCode = codeEntries.find((entry) => entry.languageId === data.languageId);
  if (existingCode) {
    throw new Error(`Code for language '${language.name}' already exists`);
  }

  // Generate new ID
  const newId = codeEntries.length > 0 ? Math.max(...codeEntries.map((entry) => entry.id)) + 1 : 1;

  // Create new code entry
  const newCodeEntry: codeTypes.CodeEntry = {
    id: newId,
    languageId: data.languageId,
    code: data.code,
    description: data.description,
  };

  // Add to collection
  codeEntries.push(newCodeEntry);

  return newCodeEntry;
};

/**
 * Updates a code entry
 */
const updateCode = async (
  id: number,
  data: codeTypes.UpdateCodeInput
): Promise<codeTypes.CodeEntry | null> => {
  // Find code entry by ID
  const index = codeEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return null;
  }

  // If language ID is changing, check if it exists and if there's no conflict
  if (data.languageId && data.languageId !== codeEntries[index].languageId) {
    // Check if language exists
    const language = await languageService.getLanguageById(data.languageId);
    if (!language) {
      throw new Error(`Language with ID ${data.languageId} not found`);
    }

    // Check if code for this language already exists
    const existingCode = codeEntries.find(
      (entry) => entry.languageId === data.languageId && entry.id !== id
    );
    if (existingCode) {
      throw new Error(`Code for language '${language.name}' already exists`);
    }
  }

  // Update code entry
  codeEntries[index] = {
    ...codeEntries[index],
    ...data,
  };

  return codeEntries[index];
};

/**
 * Deletes a code entry
 */
const deleteCode = async (id: number): Promise<boolean> => {
  // Find code entry by ID
  const index = codeEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return false;
  }

  // Remove code entry
  codeEntries.splice(index, 1);

  return true;
};

export const codeService = {
  getCodeByLanguage,
  getCodeById,
  createCode,
  updateCode,
  deleteCode,
};
