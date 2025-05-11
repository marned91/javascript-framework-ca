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
        className="w-20 h-20 object-cover rounded shadow-xl"
      />
      <div className="font-main">
        <h3 className="text-sm font-bold mt-3">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.price} NOK</p>
      </div>
    </div>
  )
}
