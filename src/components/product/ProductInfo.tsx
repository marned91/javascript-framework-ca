import { ProductPrice } from '../ProductPrice'

type Props = {
  title: string
  description: string
  price: number
  discountedPrice: number
}

export function ProductInfo({
  title,
  description,
  price,
  discountedPrice,
}: Props) {
  return (
    <>
      <h1 className="text-3xl font-large font-bold mb-3">{title}</h1>

      <ProductPrice price={price} discountedPrice={discountedPrice} />

      <p className="font-main italic mb-5 max-w-md">{description}</p>
    </>
  )
}
