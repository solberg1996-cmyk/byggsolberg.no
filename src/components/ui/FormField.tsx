type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

/** Felt-wrapper: label over, feilmelding under. */
export function FormField({ label, htmlFor, required, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.875rem] font-medium text-charcoal">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-caption text-error">
          {error}
        </p>
      )}
    </div>
  );
}
