export type OrderItem = {
  id?: string
  productId: number
  name: string
  quantity: number
  price: number
}

export type OrderPanel = {
  orders: OrderItem[]
  total: number
  clear: () => void
}
