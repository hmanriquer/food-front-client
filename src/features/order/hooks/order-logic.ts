import type { OrderItem } from '@/types/order.type'
import { useOrderStore } from '@/stores/order.store'

export const useOrderLogic = () => {
  const { orders, total, clear, addItem, removeItem, updateItem } =
    useOrderStore()

  const handleAddItem = (orderItem: OrderItem) => {
    const item = orders.find((order) => order.name === orderItem.name)
    if (item)
      updateItem({
        ...item,
        quantity: Number(item.quantity) + 1,
      })
    else addItem(orderItem)
  }

  const handleRemoveItem = (orderItem: OrderItem) => {
    const item = orders.find((order) => order.name === orderItem.name)
    if (item) {
      if (item.quantity > 1)
        updateItem({
          ...item,
          quantity: Number(item.quantity) - 1,
        })
      else removeItem(item.id || '')
    }
  }

  const totalItemQuantity = (itemId: number) => {
    const item = orders.find((order) => order.productId === itemId)
    return item?.quantity || 0
  }

  return {
    handleAddItem,
    handleRemoveItem,
    totalItemQuantity,
    orders,
    total,
    clear,
  }
}
