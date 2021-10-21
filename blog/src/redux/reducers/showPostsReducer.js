import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR } from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POSTS_REQUEST:
      return { ...state, loading: true }
    case POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts }
    case POSTS_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}