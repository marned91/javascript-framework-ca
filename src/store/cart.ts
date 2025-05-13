import { create } from 'zustand'
import type { TProduct } from '../types/product'

/**
 * Represents the shape of the cart state used by Zustand.
 */
type CartState = {
  /** Array of products added to the cart */
  cart: TProduct[]
  /**
   * Adds a product to the cart.
   * @param product - The product to add
   */
  addToCart: (product: TProduct) => void
  /**
   * Removes the first matching product with the given ID from the cart.
   * If multiple of the same product are in the cart, only one is removed.
   *
   * @param id - The ID of the product to remove
   */
  removeFromCart: (id: string) => void
  /** Clears all items from the cart */
  clearCart: () => void
}

/**
 * Zustand store for managing cart state across the app.
 */
export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFromCart: (id) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === id)
      if (index === -1) return state

      const newCart = [...state.cart]
      newCart.splice(index, 1)
      return { cart: newCart }
    }),
  clearCart: () => set({ cart: [] }),
}))
