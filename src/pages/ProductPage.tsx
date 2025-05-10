import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { TProduct } from '../types/product'
import { ProductImage } from '../components/product/ProductImage'
import { ProductReviews } from '../components/product/ProductReviews'
import { ProductInfo } from '../components/product/ProductInfo'
import { useCartStore } from '../store/cart'

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<TProduct | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
        const json = await res.json()
        setProduct(json.data)
      } catch (error) {
        console.error('Failed to fetch product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const addToCart = useCartStore((state) => state.addToCart)

  if (loading) return <p className="p-4">Loading product...</p>
  if (!product) return <p className="p-4">Product not found.</p>

  return (
    <div className="bg-light flex flex-col-reverse md:flex-row-reverse justify-center py-20 px-5 md:gap-4">
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
          onClick={() => addToCart(product)}
          className="bg-dark text-white px-6 py-2 rounded font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
