type Props = {
  price: number
  discountedPrice: number
}

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
