import api from '@/api'
import { z } from 'zod'
import { createUserSchema } from '@/schemas/user.schema'

export class UserService {
  public async createUser(user: z.infer<typeof createUserSchema>) {
    return await api.post('/users', user)
  }

  public async findAll() {
    return await api.get('/users')
  }

  public async findOne(id: number) {
    return await api.get(`/users/${id}`)
  }

  public async update(
    id: number,
    user: Partial<z.infer<typeof createUserSchema>>,
  ) {
    return await api.put(`/users/${id}`, user)
  }

  public async delete(id: number) {
    return await api.delete(`/users/${id}`)
  }
}
