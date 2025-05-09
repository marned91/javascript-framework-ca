import { useEffect, useState, useRef } from 'react'
import type { TProduct } from '../types/product'
import { ProductCard } from '../components/ProductCard'
import { HeroSection } from '../components/HeroSection'
import { SearchBar } from '../components/SearchBar'

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
      <SearchBar value={search} onChange={setSearch} />
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
