import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { HomePage } from './pages/HomePage'
import { CartPage } from './pages/CartPage'
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage'
import { ContactPage } from './pages/ContactPage'
import { ProductPage } from './pages/ProductPage'

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
