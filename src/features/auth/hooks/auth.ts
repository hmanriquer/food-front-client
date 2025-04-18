import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/auth.store'
import { AuthService, LoginCredentials } from '../services/auth.service'
import { useNavigate } from '@tanstack/react-router'

const authService = new AuthService()

export const useLogin = () => {
  const { login } = useAuthStore()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await authService.login(credentials)
      const currentUser = await authService.whoami(response.accessToken)
      console.log('From mutation: ', currentUser)
      return {
        accessToken: response.accessToken,
        user: currentUser,
      }
    },
    onSuccess: (data) => {
      login(data.accessToken, data.user)
      navigate({ to: '/orders' })
    },
  })
}

export const useWhoami = () => {
  const { accessToken } = useAuthStore()

  return useQuery({
    queryKey: ['whoami'],
    queryFn: async () => await authService.whoami(accessToken ?? ''),
    enabled: !!accessToken,
  })
}
