type Props = {
  src: string;
  alt: string;
};

/**
 * Displays a styled product image.
 *
 * This component handles layout/styling of product images
 * on the product detail page.
 *
 * @param {Props} props - Image source and alt text
 * @returns {JSX.Element} The rendered image
 */
export function ProductImage({ src, alt }: Props) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="w-full h-100 md:h-130 object-cover shadow-xl"
      />
    </div>
  );
}
