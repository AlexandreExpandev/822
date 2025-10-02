export interface CodeBlockProps {
  /**
   * The code to display and highlight
   */
  code: string;

  /**
   * The programming language for syntax highlighting
   */
  language: string;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}
