import { useEffect, useState } from 'react'
import { useCartStore } from '../store/cart'
import { ThankYouMessage } from '../components/checkout/ThankYouMessage'
import CheckoutSuccess from '../assets/checkoutSuccess.png'

export function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart)
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    clearCart()
    const randomOrderNumber = 'ID' + Math.floor(1000 - Math.random() * 9000)
    setOrderNumber(randomOrderNumber)
  }, [clearCart])

  return <ThankYouMessage image={CheckoutSuccess} orderNumber={orderNumber} />
}
