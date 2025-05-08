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
        <p className="text-center pt-10">Loading products...</p>
      ) : (
        <ul className=" m-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
