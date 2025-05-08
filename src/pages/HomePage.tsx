import { useEffect, useState } from 'react'
import type { TProduct } from '../types/product'

export function HomePage() {
  const [products, setProducts] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop')
        const json = await res.json()
        setProducts(json.data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {loading ? (
        <p className="text-center pt-10 font-main">Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.image.url}
                alt={product.image.alt || product.title}
              />
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
