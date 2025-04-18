export type FetchedProduct = {
  id: number
  name: string
  categoryId: number
  price: number
  description: string
  isActive: boolean = true
  createdAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    description: string | null
  }
}
