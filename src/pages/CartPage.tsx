import { useCartStore } from "../store/cart";
import { useNavigate } from "react-router-dom";
import { CartSummary } from "../components/cart/CartSummary";
import { CartList } from "../components/cart/CartList";
import { EmptyCart } from "../components/cart/EmptyCart";

/**
 * Displays the Cart page with:
 * - A list of products in the cart
 * - The total price
 * - A "Buy Now" button that navigates to the checkout success page
 *
 * If the cart is empty, shows the <EmptyCart /> component instead.
 *
 * @returns {JSX.Element} The rendered cart page
 */
export function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/success");
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="p-4 md:p-8 bg-light min-h-screen">
      <div className="max-w-xl md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
        <CartList cart={cart} />
        <CartSummary total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}
