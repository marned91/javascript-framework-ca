type Props = {
  price: number
  discountedPrice: number
}

/**
 * Displays product pricing and discount information.
 *
 * If the discounted price is lower than the original price:
 * - Shows the original price as struck-through
 * - Shows the discounted price
 * - Calculates and displays the discount percentage
 *
 * If there's no discount, it shows only the original price.
 *
 * @param {Props} props - The price and discounted price
 * @returns {JSX.Element} The rendered price block
 */
export function ProductPrice({ price, discountedPrice }: Props) {
  const hasDiscount = discountedPrice < price
  const discount = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0

  return (
    <div>
      {hasDiscount && (
        <p className="text-gray-500 line-through font-main">{price} NOK</p>
      )}
      <p className="font-bold text-brand font-main">{discountedPrice} NOK</p>
      {hasDiscount && (
        <p className="text-primary font-main mb-2">Save {discount}%</p>
      )}
    </div>
  )
}
