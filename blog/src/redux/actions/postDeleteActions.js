import { POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DELETE_ERROR } from '../types/postDeleteTypes'

import { deletePost } from "../../api";
import { postsRequest } from "./postsActions"

export const postDeleteRequest = (post) => {
  return (dispatch) => {
    deletePost(post.id)
      .then(data => dispatch(postDeleteSuccess(data)))
      .catch(error => dispatch(postDeleteError(error)))
      .then(data => dispatch(postsRequest(post.id, post.category)))

    return {type: POST_DELETE_REQUEST}
  }
}

export const postDeleteSuccess = (post) => ({
  type: POST_DELETE_SUCCESS,
  post,
})

export const postDeleteError = error => ({
  type: POST_DELETE_ERROR,
  error,
})
