import type { TProduct } from '../../types/product'

type Props = {
  product: TProduct
}

export function CartItem({ product }: Props) {
  return (
    <div className="flex gap-3">
      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div>
        <h3>{product.title}</h3>
        <p>{product.price} NOK</p>
      </div>
    </div>
  )
}
