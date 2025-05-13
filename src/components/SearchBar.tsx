type Props = {
  value: string
  onChange: (value: string) => void
}

/**
 * A controlled input field for searching products by title.
 *
 * Displays a styled input box. When the user types, `onChange` is called
 * with the updated value to let the parent component handle filtering.
 *
 * @param {Props} props - The current value and update function
 * @returns {JSX.Element} The rendered search bar
 */
export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="bg-primary p-10 text-center">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a product..."
        className="w-full bg-white max-w-3xl p-2 rounded"
      />
    </div>
  )
}
