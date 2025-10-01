import type { Language } from '../../types';

export interface UseLanguagesOptions {
  enabled?: boolean;
}

export interface UseLanguagesReturn {
  languages: Language[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
