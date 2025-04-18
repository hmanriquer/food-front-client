import { OrderItem } from '@/types/order.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

type OrderStore = {
  orders: OrderItem[]
  total: number
  clear: () => void
  addItem: (item: OrderItem) => void
  removeItem: (id: string) => void
  updateItem: (item: Partial<OrderItem>) => void
  setTotal: (total: number) => void
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],
      total: 0,
      addItem: (item) =>
        set((state) => {
          const newItem = { ...item, id: uuidv4() }
          const updatedOrders = [...state.orders, newItem]
          const updatedTotal = updatedOrders.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0,
          )
          return { orders: updatedOrders, total: updatedTotal }
        }),
      removeItem: (id) =>
        set((state) => {
          const updatedOrders = state.orders.filter((item) => item.id !== id)
          const updatedTotal = updatedOrders.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0,
          )
          return { orders: updatedOrders, total: updatedTotal }
        }),
      clear: () => set({ orders: [], total: 0 }),
      setTotal: (total) => set({ total }),
      updateItem: (item) =>
        set((state) => {
          const updatedOrders = state.orders.map((i) =>
            i.id === item.id ? { ...i, ...item } : i,
          )
          const updatedTotal = updatedOrders.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0,
          )
          return { orders: updatedOrders, total: updatedTotal }
        }),
    }),
    {
      name: 'order-store',
    },
  ),
)
