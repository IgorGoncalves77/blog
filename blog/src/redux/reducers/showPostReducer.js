import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../types/postTypes'

const INITIAL_STATE = {
  post: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POST_REQUEST:
      return { ...state, loading: true }
    case POST_SUCCESS:
      return { ...state, loading: false, post: action.post }
    case POST_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
