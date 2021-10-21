import { POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DELETE_ERROR } from '../types/postDeleteTypes'

const INITIAL_STATE = {
  post: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POST_DELETE_REQUEST:
      return { ...state, loading: true }
    case POST_DELETE_SUCCESS:
      return { ...state, loading: false, post: action.post }
    case POST_DELETE_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
