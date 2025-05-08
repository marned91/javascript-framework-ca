import { useEffect, useState } from 'react'
import type { TProduct } from '../types/product'
import Home from '../assets/home.png'

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
      <div>
        <img
          src={Home}
          alt="Black and white image of a young man"
          className="w-full h-auto"
        />
      </div>
      <div className="p-15 bg-primary"></div>
      {loading ? (
        <p className="text-center pt-10 font-main">Loading products...</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <img
                src={product.image.url}
                alt={product.image.alt || product.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
