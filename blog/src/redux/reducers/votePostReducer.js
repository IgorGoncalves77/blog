import { POST_VOTE_REQUEST, POST_VOTE_SUCCESS, POST_VOTE_ERROR } from '../types/postVoteTypes'

const INITIAL_STATE = {
  post: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POST_VOTE_REQUEST:
      return { ...state, loading: true }
    case POST_VOTE_SUCCESS:
      return { ...state, loading: false, post: action.post }
    case POST_VOTE_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
