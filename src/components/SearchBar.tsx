type Props = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="bg-primary p-10">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a product..."
        className="w-full bg-white max-w-md p-2 rounded"
      />
    </div>
  )
}
