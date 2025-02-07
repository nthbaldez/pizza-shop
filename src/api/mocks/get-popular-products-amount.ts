import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsAmountMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Marguerita', amount: 5 },
    { product: 'Pizza Portuguesa', amount: 7 },
    { product: 'Pizza Quatro Queijos', amount: 9 },
    { product: 'Pizza Calabresa', amount: 3 },
    { product: 'Pizza Carbonara', amount: 4 },
  ])
})
