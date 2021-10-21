/*import { COMMENT_DELETE_REQUEST, COMMENT_DELETE_SUCCESS, COMMENT_DELETE_ERROR } from '../types/commentDeleteTypes'

import { deleteComment } from "../../api";

export const commentDeleteRequest = (id) => {
  return (dispatch) => {
    deleteComment(id)
      .then(data => dispatch(commentDeleteSuccess(data)))
      .catch(error => dispatch(commentDeleteError(error)))

    return {type: COMMENT_DELETE_REQUEST}
  }
}

export const commentDeleteSuccess = (comment) => ({
  type: COMMENT_DELETE_SUCCESS,
  comment,
})

export const commentDeleteError = error => ({
  type: COMMENT_DELETE_ERROR,
  error,
})*/

import { COMMENT_DELETE_REQUEST, COMMENT_DELETE_SUCCESS, COMMENT_DELETE_ERROR } from '../types/commentDeleteTypes'

import { deleteComment } from "../../api";
import { commentsRequest } from "./commentsActions";

export const commentDeleteRequest = (comment) => {
  return (dispatch) => {
    deleteComment(comment.id)
      .then(data => dispatch(commentDeleteSuccess(data)))
      .catch(error => dispatch(commentDeleteError(error)))
      .then(data => dispatch(commentsRequest(comment.parentId)))
      
    return {type: COMMENT_DELETE_REQUEST}
  }
}

export const commentDeleteSuccess = (comment) => ({
  type: COMMENT_DELETE_SUCCESS,
  comment,
})

export const commentDeleteError = error => ({
  type: COMMENT_DELETE_ERROR,
  error,
})
