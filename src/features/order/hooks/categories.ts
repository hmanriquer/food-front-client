import { useQuery } from '@tanstack/react-query'
import type { Category } from '@/types/category.type'
import api from '@/api'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => await api.get<Category[]>('/categories'),
    select: (data) => data.data,
  })
}
