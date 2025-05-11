import { useCartStore } from '../../store/cart'
import type { TProduct } from '../../types/product'

type Props = {
  product: TProduct
}

export function CartItem({ product }: Props) {
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <div className="relative flex gap-3 items-center">
      <button
        onClick={() => removeFromCart(product.id)}
        className="absolute top-5 right-0 text-gray-500 hover:text-black text-lg px-2"
        aria-label={`Remove ${product.title} from cart`}
      >
        &times;
      </button>
      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        className="w-20 h-20 object-cover rounded shadow-xl"
      />
      <div className="flex-1 font-main">
        <h3 className="text-sm font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.price} NOK</p>
      </div>
    </div>
  )
}
