export namespace languageTypes {
  /**
   * Programming language entity
   */
  export interface Language {
    id: number;
    name: string;
    displayName: string;
    fileExtension: string;
    active: boolean;
  }

  /**
   * Input for creating a new language
   */
  export interface CreateLanguageInput {
    name: string;
    displayName: string;
    fileExtension: string;
    active?: boolean;
  }

  /**
   * Input for updating a language
   */
  export interface UpdateLanguageInput {
    name?: string;
    displayName?: string;
    fileExtension?: string;
    active?: boolean;
  }
}
