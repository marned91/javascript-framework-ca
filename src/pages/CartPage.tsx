import { useCartStore } from '../store/cart'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../components/cart/CartItem'

export function CartPage() {
  const cart = useCartStore((state) => state.cart)
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    navigate('/success')
  }

  return (
    <div className="p-4 md:p-8 bg-gray-300 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <div className="flex justify-between py-1">
              <span>Products</span>
              <span>{total} NOK</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-primary hover:bg-indigo-700 text-white font-semibold py-3 mt-6 rounded-lg w-full"
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  )
}
