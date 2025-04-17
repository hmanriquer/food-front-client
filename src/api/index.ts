import axios from 'axios'

const api = axios.create({
  baseURL: 'https://favourable-janice-hmnvkv-3d10e8b8.koyeb.app/',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  else config.headers.Authorization = ''
  return config
})

export default api
