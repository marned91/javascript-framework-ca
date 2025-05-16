import { forwardRef } from "react";

type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * A reusable controlled input field with label and optional error display.
 * Now supports ref forwarding for react-hook-form integration.
 */
export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <div>
        <label className="block font-semibold mb-1">{label}</label>
        <input
          {...inputProps}
          ref={ref}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
