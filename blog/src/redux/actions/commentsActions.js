import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_ERROR } from '../types/commentsTypes'

import { getCommentsPost } from "../../api";
import { postRequest } from "./postActions";

export const commentsRequest = (id) => {
  return (dispatch) => {
    getCommentsPost(id)
      .then(data => dispatch(commentsSuccess(data)))
      .catch(error => dispatch(commentsError(error)))
      .then(data => dispatch(postRequest(id)))

    return {type: COMMENTS_REQUEST}
  }
}

export const commentsSuccess = (comments) => ({
  type: COMMENTS_SUCCESS,
  comments,
})

export const commentsError = error => ({
  type: COMMENTS_ERROR,
  error,
})