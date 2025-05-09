import type { TProduct } from '../types/product'
import { Link } from 'react-router-dom'

type Props = {
  product: TProduct
}

export function ProductCard({ product }: Props) {
  const hasDiscount = product.discountedPrice < product.price
  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0
  return (
    <li className="relative transition duration-300 ease-out hover:scale-105 cursor-pointer">
      <p className="font-medium text-2xl font-semibold absolute bg-white/80 p-4 rounded-tl">
        {product.title}
      </p>
      <img
        className="w-full h-100 object-cover shadow-2xl rounded"
        src={product.image.url}
        alt={product.image.alt || product.title}
      />
      <div className="absolute bottom-0 bg-white/80 w-full rounded-bl">
        <p
          className={
            hasDiscount
              ? 'line-through text-gray-500 pl-3'
              : 'font-bold py-6 pl-3'
          }
        >
          {product.price}$
        </p>
        {hasDiscount && (
          <>
            <p className="font-bold text-brand pl-3">
              {product.discountedPrice} kr
            </p>
            <p className="text-primary pl-3">Save {discount}%</p>
          </>
        )}
      </div>
    </li>
  )
}
