import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/schemas/types'

interface AuthState {
  accessToken: string | null
  user: User | null
  isAuthenticated: boolean
  login: (token: string, user: User) => void
  logout: () => void
  setToken: (token: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      isAuthenticated: false,
      login: (token: string, user: User) => {
        set({
          accessToken: token,
          user,
          isAuthenticated: true,
        })
      },
      logout: () => {
        set({
          accessToken: null,
          user: null,
          isAuthenticated: false,
        })
      },
      setToken: (token: string) => {
        set({ accessToken: token })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
