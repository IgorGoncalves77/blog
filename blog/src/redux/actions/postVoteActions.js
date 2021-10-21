import { POST_VOTE_REQUEST, POST_VOTE_SUCCESS, POST_VOTE_ERROR } from '../types/postVoteTypes'

import { votePost } from "../../api";
import { postsRequest } from "./postsActions";

export const postVoteRequest = (post, acao) => {
  console.log(post.category)
  return (dispatch) => {
    votePost(post.id, acao)
      .then(data => dispatch(postVoteSuccess(data)))
      .catch(error => dispatch(postVoteError(error)))
      .then(data => dispatch(postsRequest(post.id, post.category)))
      
    return {type: POST_VOTE_REQUEST}
  }
}

export const postVoteSuccess = (post) => ({
  type: POST_VOTE_SUCCESS,
  post,
})

export const postVoteError = error => ({
  type: POST_VOTE_ERROR,
  error,
})
