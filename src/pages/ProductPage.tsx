import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { TProduct } from '../types/product'

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

  if (loading) return <p className="p-4">Loading product...</p>
  if (!product) return <p className="p-4">Product not found.</p>

  const hasDiscount = product.discountedPrice < product.price
  const discount = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0

  return (
    <div className="bg-light flex flex-col-reverse md:flex-row-reverse justify-center py-20 px-5 md:gap-4">
      <div>
        <img
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="w-full h-100 md:h-130 object-cover shadow-xl"
        />
      </div>
      <div className="bg-white p-5 lg:p-10 rounded">
        <h1 className="text-3xl font-large font-bold mb-3">{product.title}</h1>
        <div>
          {hasDiscount && (
            <p className="text-gray-500 line-through font-main">
              {product.price} NOK
            </p>
          )}
          <p className="font-bold text-brand font-main mb-2">
            {product.discountedPrice} NOK
          </p>{' '}
          {hasDiscount && (
            <p className="text-primary mb-5 font-main">Save {discount}%</p>
          )}
        </div>

        <p className="font-main italic mb-5 max-w-md">{product.description}</p>

        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-5">
            <h2 className="text-lg font-medium font-semibold mb-3">Reviews</h2>
            <ul className="space-y-4 max-h-[100px] overflow-y-auto pr-2">
              {product.reviews.map((review) => (
                <li key={review.id}>
                  <p className="font-main font-semibold text-sm mb-1">
                    {review.username}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {review.rating}/5
                  </p>
                  <p className="text-sm text-gray-600 italic mb-5 max-w-md">
                    "{review.description}"
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="bg-dark text-white px-6 py-2 rounded font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
