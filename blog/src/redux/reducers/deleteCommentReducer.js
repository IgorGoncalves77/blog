import { COMMENT_DELETE_REQUEST, COMMENT_DELETE_SUCCESS, COMMENT_DELETE_ERROR } from '../types/commentDeleteTypes'

const INITIAL_STATE = {
  comment: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMMENT_DELETE_REQUEST:
      return { ...state, loading: true }
    case COMMENT_DELETE_SUCCESS:
      return { ...state, loading: false, comment: action.comment }
    case COMMENT_DELETE_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
