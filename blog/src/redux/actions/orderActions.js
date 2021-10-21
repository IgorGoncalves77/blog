import { ORDER_SUCCESS } from '../types/orderTypes'

export const orderSuccess = (order) => ({
  type: ORDER_SUCCESS,
  order,
})

