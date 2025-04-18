import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@features/users/services/user.service'
import { createUserSchema } from '@/schemas/user.schema'

const service = new UserService()

export const useUpdateUser = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (user: Partial<z.infer<typeof createUserSchema>>) => {
      await service.update(id, user)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', id] })
    },
    onError: (error) => {
      // TODO: Add toaster error
      console.log(error)
    },
  })
}
