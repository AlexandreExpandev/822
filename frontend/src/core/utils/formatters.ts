/**
 * @function formatDate
 * @summary Formats a date string or Date object into a localized string
 * @param {string | Date} date - The date to format
 * @param {Intl.DateTimeFormatOptions} [options] - Formatting options
 * @returns {string} Formatted date string
 */
export const formatDate = (
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * @function truncateText
 * @summary Truncates text to a specified length and adds ellipsis
 * @param {string} text - The text to truncate
 * @param {number} [maxLength=100] - Maximum length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * @function getFileExtension
 * @summary Extracts the file extension from a filename
 * @param {string} filename - The filename to process
 * @returns {string} The file extension (without the dot)
 */
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};
