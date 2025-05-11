import { CartItem } from './CartItem'
import type { TProduct } from '../../types/product'

type Props = {
  cart: TProduct[]
}

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
