export type ProductCard = {
  id: number
  name: string
  description: string
  price: number
  category: string
  quantity: number
  onAdd: () => void
  onRemove: () => void
}
