import type { CategorySectionProps } from './types'
import { Mapper } from '@/components/mapper'
import { CategorySelector } from '@features/order/components'
import { Skeleton } from '@/components/ui/skeleton'

export function CategorySection({
  categories,
  loading,
  currentCategory,
  onSelect,
}: CategorySectionProps) {
  if (loading || !categories) {
    return (
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    )
  }

  return (
    <section
      data-testid="category-section"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      <Mapper
        items={categories}
        render={(category) => (
          <CategorySelector
            key={category.id}
            id={category.id}
            name={category.name}
            active={currentCategory === category.id}
            onClick={() => onSelect(category.id)}
            description={category.description || ''}
          />
        )}
      />
    </section>
  )
}
