type Props = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

/**
 * A reusable controlled input field with label and optional error display.
 *
 * Used in ContactPage for short, single-line inputs.
 *
 * @param {Props} props - Input config including label, value, and validation message
 * @returns {JSX.Element} The rendered input field
 */
export function FormInput({ label, value, onChange, error }: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
