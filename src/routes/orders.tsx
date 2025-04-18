import { createFileRoute } from '@tanstack/react-router'
import {
  CategorySection,
  MenuSection,
  OrderSection,
} from '@features/order/sections'
import { productAdapter } from '@features/order/adapters/product.adapter'
import { useCategoryFilterStore } from '@/stores/category.store'
import { useMemo } from 'react'
import {
  useCategories,
  useProducts,
  useOrderLogic,
} from '@features/order/hooks'
import { useOrderStore } from '@/stores/order.store'
import MainLayout from '@/components/layouts/main.layout'

export const Route = createFileRoute('/orders')({
  component: Orders,
})

function Orders() {
  const { data: categories, isLoading: loadingCategories } = useCategories()
  const { currentCategory, setCurrentCategory } = useCategoryFilterStore()
  const { data: products, isLoading: loadingProducts } = useProducts()
  const { totalItemQuantity, handleAddItem, handleRemoveItem } = useOrderLogic()
  const { orders, total, clear } = useOrderStore()

  const filteredProducts = useMemo(() => {
    if (!products || !currentCategory) return products?.map(productAdapter)
    const filteredProducts = products.filter(
      (product) => product.category.id === currentCategory,
    )
    return filteredProducts.map(productAdapter)
  }, [products, currentCategory])

  const handleCategorySelect = (categoryId: number) => {
    if (currentCategory === categoryId) return setCurrentCategory(null)
    return setCurrentCategory(categoryId)
  }

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 lg:flex-row">
        <section className="flex-1 overflow-y-auto">
          <CategorySection
            categories={categories || []}
            loading={loadingCategories}
            currentCategory={currentCategory}
            onSelect={handleCategorySelect}
          />
          <MenuSection
            products={products || []}
            loading={loadingProducts}
            filteredProducts={filteredProducts || []}
            totalItemQuantity={totalItemQuantity}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        </section>
        <OrderSection
          orders={orders}
          total={total}
          clear={clear}
        />
      </div>
    </MainLayout>
  )
}
