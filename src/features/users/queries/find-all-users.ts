import { useQuery } from '@tanstack/react-query'
import { UserService } from '@features/users/services/user.service'
import { User } from '@/schemas/types'

const service = new UserService()

export const useFindAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => service.findAll(),
    select: (data) => data.data as User[],
  })
}
