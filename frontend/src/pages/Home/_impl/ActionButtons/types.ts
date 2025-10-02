export interface ActionButtonsProps {
  /**
   * Whether code is currently being generated
   */
  isGenerating: boolean;

  /**
   * Whether code is currently being downloaded
   */
  isDownloading: boolean;

  /**
   * Callback when download button is clicked
   */
  onDownload: () => void;

  /**
   * Whether to show the download button
   * @default true
   */
  showDownload?: boolean;
}
