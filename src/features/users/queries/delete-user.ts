import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@features/users/services/user.service'

const service = new UserService()

export const useDeleteUser = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => await service.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', id] })
    },
    onError: (error) => {
      // TODO: Add toaster error
      console.log(error)
    },
  })
}
