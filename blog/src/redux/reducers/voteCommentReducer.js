import { COMMENT_VOTE_REQUEST, COMMENT_VOTE_SUCCESS, COMMENT_VOTE_ERROR } from '../types/commentsVoteTypes'

const INITIAL_STATE = {
  comment: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMMENT_VOTE_REQUEST:
      return { ...state, loading: true }
    case COMMENT_VOTE_SUCCESS:
      return { ...state, loading: false, comment: action.comment }
    case COMMENT_VOTE_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
