export type TProduct = {
  id: string
  title: string
  description: string
  price: number
  discountedPrice: number
  reviews: [
    {
      id: string
      username: string
      rating: number
      description: string
    },
  ]
  image: {
    url: string
    alt: string
  }
}
