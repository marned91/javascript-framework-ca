import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { TProduct } from "../types/product";
import { ProductImage } from "../components/product/ProductImage";
import { ProductReviews } from "../components/product/ProductReviews";
import { ProductInfo } from "../components/product/ProductInfo";
import { useCartStore } from "../store/cart";

/**
 * Displays a single product's details using a dynamic route param (:id).
 *
 * Fetches product data from the Noroff API, shows title, image, description, price,
 * reviews (if available), and includes an "Add to Cart" button that updates the Zustand store.
 *
 * @returns {JSX.Element} The rendered product page.
 */
export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const json = await res.json();
        setProduct(json.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    addToCart(product!);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return <p className="p-4">Loading product...</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="bg-light relative">
      {added && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-green-100 text-green-800 text-sm rounded-md px-4 py-2 shadow-md">
            ✅ Product added to cart
          </div>
        </div>
      )}
      <div className=" flex flex-col-reverse md:flex-row-reverse justify-center py-20 px-5 md:gap-4">
        <ProductImage
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        <div className="bg-white p-5 lg:p-10 rounded">
          <ProductInfo
            title={product.title}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
          <ProductReviews reviews={product.reviews} />
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-darkHover cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
