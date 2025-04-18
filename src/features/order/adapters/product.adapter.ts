import type { FetchedProduct } from '@/types/product.type'
import type { ProductCard } from '../components/product-card/types'

export const productAdapter = (
  product: FetchedProduct,
): Omit<ProductCard, 'onAdd' | 'onRemove' | 'quantity'> => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category.name,
  }
}
