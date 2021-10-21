import { COMMENT_VOTE_REQUEST, COMMENT_VOTE_SUCCESS, COMMENT_VOTE_ERROR } from '../types/commentsVoteTypes'

import { voteComment } from "../../api";
import { commentsRequest } from "./commentsActions";

export const commentVoteRequest = (comment, acao) => {
  return (dispatch) => {
    voteComment(comment.id, acao)
      .then(data => dispatch(commentVoteSuccess(data)))
      .catch(error => dispatch(commentVoteError(error)))
      .then(data => dispatch(commentsRequest(comment.parentId)))

    return {type: COMMENT_VOTE_REQUEST}
  }
}

export const commentVoteSuccess = (comment) => ({
  type: COMMENT_VOTE_SUCCESS,
  comment,
})

export const commentVoteError = error => ({
  type: COMMENT_VOTE_ERROR,
  error,
})
