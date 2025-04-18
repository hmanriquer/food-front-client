import { useQuery } from '@tanstack/react-query'
import { UserService } from '@features/users/services/user.service'
import { User } from '@/schemas/types'

const service = new UserService()

export const useFindOneUser = (id: number) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => service.findOne(id),
    select: (data) => data.data as User,
  })
}
