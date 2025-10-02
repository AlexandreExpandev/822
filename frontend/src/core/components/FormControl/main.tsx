import type { FormControlProps } from './types';

/**
 * @component FormControl
 * @summary Container for form elements with label and error message
 * @domain core
 * @type ui-component
 * @category input
 */
export const FormControl = ({
  children,
  label,
  htmlFor,
  error,
  className = '',
  ...props
}: FormControlProps) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {label && (
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
      )}
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};
