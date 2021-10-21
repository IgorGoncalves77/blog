import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_ERROR } from '../types/orderTypes'

const INITIAL_STATE = {
  order: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ORDER_REQUEST:
      return { ...state, loading: true }
    case ORDER_SUCCESS:
      return { ...state, loading: false, order: action.order }
    case ORDER_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
