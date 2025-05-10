import type { TProduct } from '../types/product'
import { Link } from 'react-router-dom'
import { ProductPrice } from './ProductPrice'

type Props = {
  product: TProduct
}

export function ProductCard({ product }: Props) {
  return (
    <li className="relative transition duration-300 ease-out hover:scale-105 cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <p className="font-medium text-2xl font-semibold absolute bg-white/80 p-4 rounded-tl">
          {product.title}
        </p>
        <img
          className="w-full h-100 object-cover shadow-2xl rounded"
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        <div className="absolute bottom-0 bg-white/80 w-full rounded-bl px-3 py-2">
          <ProductPrice
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        </div>
      </Link>
    </li>
  )
}
