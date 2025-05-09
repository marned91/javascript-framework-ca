import { useEffect, useState, useRef } from 'react'
import type { TProduct } from '../types/product'
import Home from '../assets/home.png'
import { ProductCard } from '../components/ProductCard'

export function HomePage() {
  const [products, setProducts] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const productSectionRef = useRef<HTMLElement | null>(null)

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

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
        <div className="absolute top-1/10 sm:top-1/3 left-1/2 transform -translate-x-1/2 text-center z-10 bg-white/50 p-4 rounded w-full sm:max-w-md mx-auto">
          <h1 className="text-xl md:text-3xl/12 font-large font-semibold">
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
          className="w-full h-full"
        />
      </div>
      <div className="bg-primary p-10">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for a product..."
          className="w-full bg-white max-w-md p-2 rounded"
        />
      </div>
      <section ref={productSectionRef}>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 p-10 relative">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
