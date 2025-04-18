import type { FetchedProduct } from '@/types/product.type'
import { useQuery } from '@tanstack/react-query'
import api from '@/api'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => await api.get<FetchedProduct[]>('/products'),
    select: (data) => data.data,
  })
}
