import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { HomePage } from './pages/HomePage'
import { CartPage } from './pages/CartPage'
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage'
import { ContactPage } from './pages/ContactPage'
import { ProductPage } from './pages/ProductPage'

/**
 * Main application component that defines all routes using React Router.
 *
 * Routes:
 * - /              → HomePage (inside Layout)
 * - /contact       → ContactPage
 * - /cart          → CartPage
 * - /product/:id   → ProductPage (dynamic)
 * - /success       → CheckoutSuccessPage
 *
 * Wrapped in a <Layout /> which provides the Header and Footer.
 *
 * @returns {JSX.Element} The route definitions for the app.
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="success" element={<CheckoutSuccessPage />} />
      </Route>
    </Routes>
  )
}

export default App
