import { CartItem } from './CartItem'
import type { TProduct } from '../../types/product'

type Props = {
  cart: TProduct[]
}

/**
 * Renders a vertical list of all items currently in the cart.
 *
 * Uses the <CartItem /> component to display each individual product.
 *
 * @param {Props} props - The array of cart items
 * @returns {JSX.Element} The rendered cart item list
 */
export function CartList({ cart }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col">
      <h2 className="text-2xl font-semibold mb-10 font-medium">
        Your Shopping Cart
      </h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
