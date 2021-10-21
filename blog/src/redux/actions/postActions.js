import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../types/postTypes'

import { getPost } from "../../api";

export const postRequest = (id) => {
  return (dispatch) => {
    getPost(id)
      .then(data => dispatch(postSuccess(data)))
      .catch(error => dispatch(postError(error)))
      
    return {type: POST_REQUEST}
  }
}

export const postSuccess = (post) => ({
  type: POST_SUCCESS,
  post,
})

export const postError = error => ({
  type: POST_ERROR,
  error,
})
