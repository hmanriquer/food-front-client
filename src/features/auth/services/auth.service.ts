import api from '@/api'
import axios from 'axios'
import { User } from '@/schemas/types'

interface LoginResponse {
  accessToken: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export class AuthService {
  public async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>(
      'https://favourable-janice-hmnvkv-3d10e8b8.koyeb.app/api/v1/auth/login',
      credentials,
    )
    if (response.status !== 201) throw new Error('Failed to login')
    return response.data
  }

  public async logout(): Promise<void> {
    await api.post('/auth/logout')
  }

  public async whoami(token: string): Promise<User> {
    const response = await axios.get(
      'https://favourable-janice-hmnvkv-3d10e8b8.koyeb.app/api/v1/auth/whoami',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data.user
  }
}
