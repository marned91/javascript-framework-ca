import { Link } from "react-router-dom";

/**
 * Displays a message when the cart is empty.
 *
 * Used in the <CartPage /> when there are no items in the cart.
 *
 * @returns {JSX.Element} The rendered empty cart UI
 */
export function EmptyCart() {
  return (
    <div className="bg-light px-4 py-40 flex justify-center min-h-screen">
      <div className="bg-white text-center p-10 rounded-lg shadow-xl max-w-md w-full h-[60%]">
        <div className="text-6xl mb-6">😅</div>
        <h2 className="text-xl font-semibold mb-10">Your Cart is Empty!</h2>
        <Link
          to="/"
          className="bg-primary hover:bg-darkHover text-white px-6 py-3 rounded-md font-navButtons"
        >
          Shop Now!
        </Link>
      </div>
    </div>
  );
}
