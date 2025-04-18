import { FetchedProduct } from '@/types/product.type'
import { ProductCard } from '../../components/product-card/types'
import { OrderItem } from '@/types/order.type'

export type MenuProps = {
  products: FetchedProduct[]
  loading: boolean
  filteredProducts: Omit<ProductCard, 'onAdd' | 'onRemove' | 'quantity'>[]
  totalItemQuantity: (itemId: number) => number
  handleAddItem: (orderItem: OrderItem) => void
  handleRemoveItem: (orderItem: OrderItem) => void
}
