import { useEffect, useState, useRef } from 'react'
import type { TProduct } from '../types/product'
import Home from '../assets/home.png'

export function HomePage() {
  const [products, setProducts] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)
  const productSectionRef = useRef<HTMLElement | null>(null)

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
      <div className="relative">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-3xl font-semibold max-w-md mx-auto">
            Everything you need, in one place, just for YOU!
          </h1>
          <button
            onClick={() =>
              productSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-4 px-6 py-2 bg-dark text-white font-bold rounded"
          >
            Shop Now
          </button>
        </div>
        <img
          src={Home}
          alt="Black and white image of a young man"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-primary p-10"></div>
      <section ref={productSectionRef}>
        {loading ? (
          <p>Loading products...</p>
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
      </section>
    </div>
  )
}
