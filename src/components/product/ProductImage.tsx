type Props = {
  src: string
  alt: string
}

export function ProductImage({ src, alt }: Props) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="w-full h-100 md:h-130 object-cover shadow-xl"
      />
    </div>
  )
}
