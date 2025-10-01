import { languageTypes } from './languageTypes';

// In-memory storage for languages
let languages: languageTypes.Language[] = [
  {
    id: 1,
    name: 'javascript',
    displayName: 'JavaScript',
    fileExtension: 'js',
    active: true,
  },
  {
    id: 2,
    name: 'python',
    displayName: 'Python',
    fileExtension: 'py',
    active: true,
  },
  {
    id: 3,
    name: 'java',
    displayName: 'Java',
    fileExtension: 'java',
    active: true,
  },
  {
    id: 4,
    name: 'csharp',
    displayName: 'C#',
    fileExtension: 'cs',
    active: true,
  },
  {
    id: 5,
    name: 'cpp',
    displayName: 'C++',
    fileExtension: 'cpp',
    active: true,
  },
];

/**
 * Lists all programming languages
 */
const listLanguages = async (): Promise<languageTypes.Language[]> => {
  return languages.filter((lang) => lang.active);
};

/**
 * Gets a programming language by ID
 */
const getLanguageById = async (id: number): Promise<languageTypes.Language | null> => {
  const language = languages.find((lang) => lang.id === id);
  return language || null;
};

/**
 * Gets a programming language by name
 */
const getLanguageByName = async (name: string): Promise<languageTypes.Language | null> => {
  const language = languages.find((lang) => lang.name.toLowerCase() === name.toLowerCase());
  return language || null;
};

/**
 * Creates a new programming language
 */
const createLanguage = async (
  data: languageTypes.CreateLanguageInput
): Promise<languageTypes.Language> => {
  // Check if language with the same name already exists
  const existingLanguage = await getLanguageByName(data.name);
  if (existingLanguage) {
    throw new Error(`Language with name '${data.name}' already exists`);
  }

  // Generate new ID
  const newId = languages.length > 0 ? Math.max(...languages.map((lang) => lang.id)) + 1 : 1;

  // Create new language
  const newLanguage: languageTypes.Language = {
    id: newId,
    name: data.name,
    displayName: data.displayName,
    fileExtension: data.fileExtension,
    active: data.active ?? true,
  };

  // Add to collection
  languages.push(newLanguage);

  return newLanguage;
};

/**
 * Updates a programming language
 */
const updateLanguage = async (
  id: number,
  data: languageTypes.UpdateLanguageInput
): Promise<languageTypes.Language | null> => {
  // Find language by ID
  const index = languages.findIndex((lang) => lang.id === id);
  if (index === -1) {
    return null;
  }

  // Check if name is being changed and if it conflicts with existing language
  if (data.name && data.name !== languages[index].name) {
    const existingLanguage = await getLanguageByName(data.name);
    if (existingLanguage && existingLanguage.id !== id) {
      throw new Error(`Language with name '${data.name}' already exists`);
    }
  }

  // Update language
  languages[index] = {
    ...languages[index],
    ...data,
  };

  return languages[index];
};

/**
 * Deletes a programming language
 */
const deleteLanguage = async (id: number): Promise<boolean> => {
  // Find language by ID
  const index = languages.findIndex((lang) => lang.id === id);
  if (index === -1) {
    return false;
  }

  // Remove language
  languages.splice(index, 1);

  return true;
};

export const languageService = {
  listLanguages,
  getLanguageById,
  getLanguageByName,
  createLanguage,
  updateLanguage,
  deleteLanguage,
};
