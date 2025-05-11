type Props = {
  total: number
  onCheckout: () => void
}

export function CartSummary({ total, onCheckout }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-semibold mb-10 font-large">Checkout</h1>
        <div className="flex justify-between py-1 font-main">
          <span>Products</span>
          <span>{total.toFixed(2)} NOK</span>
        </div>
        <div className="flex justify-between py-1 font-main">
          <span>Shipping</span>
          <span>Free</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="bg-primary hover:bg-darkHover text-white font-semibold py-3 mt-6 rounded-lg w-full font-navButtons cursor-pointers"
      >
        Buy Now!
      </button>
    </div>
  )
}
