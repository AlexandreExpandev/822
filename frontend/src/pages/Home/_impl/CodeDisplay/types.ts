import type { Code } from '@/domain/code/types';

export interface CodeDisplayProps {
  /**
   * Generated code data
   */
  code?: Code;

  /**
   * Loading state
   */
  isLoading: boolean;

  /**
   * Handler for code download
   */
  onDownload: () => void;
}
