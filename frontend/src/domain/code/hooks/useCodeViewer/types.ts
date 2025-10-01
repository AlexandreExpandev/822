export interface UseCodeViewerOptions {
  language: string;
}

export interface CodeData {
  id: number;
  languageId: number;
  code: string;
  description?: string;
  fileExtension: string;
  displayName: string;
}

export interface UseCodeViewerReturn {
  codeData: CodeData | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
