import type { MenuProps } from './types'
import { ProductCard } from '@features/order/components'
import { Mapper } from '@/components/mapper'
import { Skeleton } from '@/components/ui/skeleton'

export function MenuSection({
  loading,
  products,
  filteredProducts,
  totalItemQuantity,
  handleAddItem,
  handleRemoveItem,
}: MenuProps) {
  if (loading || !products)
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )

  return (
    <>
      <h2 className="my-4 text-2xl font-bold">Menú</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Mapper
          items={filteredProducts || []}
          render={(product) => (
            <ProductCard
              key={product.id}
              {...product}
              quantity={totalItemQuantity(product.id)}
              onAdd={() =>
                handleAddItem({
                  name: product.category + ' - ' + product.name,
                  price: product.price,
                  quantity: 1,
                  productId: product.id,
                })
              }
              onRemove={() =>
                handleRemoveItem({
                  name: product.category + ' - ' + product.name,
                  price: product.price,
                  quantity: 1,
                  productId: product.id,
                })
              }
            />
          )}
        />
      </div>
    </>
  )
}
