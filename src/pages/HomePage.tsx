import { useEffect, useState, useRef } from 'react'
import type { TProduct } from '../types/product'
import { ProductCard } from '../components/ProductCard'
import { HeroSection } from '../components/HeroSection'

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
      <HeroSection
        onScrollClick={() =>
          productSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
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
