import { Category } from '@/types/category.type'

export type CategorySectionProps = {
  categories: Category[]
  loading: boolean
  currentCategory: number | null
  onSelect: (categoryId: number) => void
}
