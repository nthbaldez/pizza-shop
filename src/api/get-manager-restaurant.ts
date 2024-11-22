import { api } from '@/lib/axios'

interface GetManagerResponse {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagerRestaurant(): Promise<GetManagerResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
