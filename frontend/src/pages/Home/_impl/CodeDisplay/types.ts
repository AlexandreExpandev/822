export interface CodeDisplayProps {
  /**
   * The code to display
   */
  code: string;

  /**
   * The programming language for syntax highlighting
   */
  language: string;

  /**
   * Whether the code is currently loading
   */
  isLoading: boolean;
}
