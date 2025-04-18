import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@features/users/services/user.service'
import { CreateUser } from '@/schemas/types'

const service = new UserService()

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (user: CreateUser) => await service.createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      // TODO: Add toaster error
      console.log(error)
    },
  })
}
