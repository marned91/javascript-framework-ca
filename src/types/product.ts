/**
 * Represents a product from the Noroff API.
 */
export type TProduct = {
  /** Unique product ID (UUID format) */
  id: string
  /** Product title/name */
  title: string
  /** Description of the product */
  description: string
  /** Original full price */
  price: number
  /** Discounted price, used for display if lower than `price` */
  discountedPrice: number
  /** List of customer reviews */
  reviews: [
    {
      /** Unique review ID */
      id: string
      /** Username of the reviewer */
      username: string
      /** Rating */
      rating: number
      /** The review text */
      description: string
    },
  ]
  /** Product image data */
  image: {
    /** Image URL */
    url: string
    /** Alt text for accessibility */
    alt: string
  }
}
