type Props = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
}

/**
 * A reusable controlled textarea component with label and optional error display.
 *
 * Used in ContactPage where multi-line input is required.
 *
 * @param {Props} props - Textarea config including label, value, and validation message
 * @returns {JSX.Element} The rendered textarea block
 */
export function FormTextarea({ label, value, onChange, error }: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded min-h-[100px] mb-3"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
