import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'

const api = axios.create({
  baseURL: 'https://favourable-janice-hmnvkv-3d10e8b8.koyeb.app/api/v1',
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken
  console.log(token)
  if (token) config.headers.Authorization = `Bearer ${token}`
  else config.headers.Authorization = ''
  return config
})

export default api
