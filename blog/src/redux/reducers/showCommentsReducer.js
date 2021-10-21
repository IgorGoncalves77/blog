import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_ERROR } from '../types/commentsTypes'

const INITIAL_STATE = {
  comments: [],
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMMENTS_REQUEST:
      return { ...state, loading: true }
    case COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.comments }
    case COMMENTS_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}