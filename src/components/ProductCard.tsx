import type { TProduct } from '../types/product'

type Props = {
  product: TProduct
}

export function ProductCard({ product }: Props) {
  return (
    <li className="relative">
      <p className="font-medium text-2xl font-semibold absolute bg-white/70 p-4">
        {product.title}
      </p>
      <img
        className="w-full h-70 object-cover rounded shadow-xl"
        src={product.image.url}
        alt={product.image.alt || product.title}
      />
    </li>
  )
}
