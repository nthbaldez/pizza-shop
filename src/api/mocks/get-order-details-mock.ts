import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '12312313213',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Calabresa' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1500,
        product: { name: 'Pizza Portuguesa' },
        quantity: 1,
      },
    ],
  })
})
