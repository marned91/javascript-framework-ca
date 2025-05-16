import { forwardRef } from "react";

type Props = {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * A reusable controlled textarea component with label and optional error display.
 * Now supports ref forwarding for react-hook-form integration.
 */
export const FormTextarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...textareaProps }, ref) => {
    return (
      <div>
        <label className="block font-semibold mb-1">{label}</label>
        <textarea
          {...textareaProps}
          ref={ref}
          className="w-full p-2 border rounded min-h-[100px] mb-3"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  },
);

FormTextarea.displayName = "FormTextarea";
