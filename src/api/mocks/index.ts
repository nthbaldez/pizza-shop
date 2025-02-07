import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getManagerRestaurantMock } from './get-manager-restaurant'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getOrdersDetailMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsAmountMock } from './get-popular-products-amount'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCanceledOrdersAmountMock,
  getDayOrdersAmountMock,
  getPopularProductsAmountMock,
  getDailyRevenueInPeriodMock,
  getProfileMock,
  getManagerRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
