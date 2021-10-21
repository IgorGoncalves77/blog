import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR } from '../types/postsTypes'

import { getPosts } from "../../api";
import { postRequest } from "./postActions"
import { categoryRequest } from "./categoryActions";

export const postsRequest = (id, category) => {
  return (dispatch) => {
    getPosts()
      .then(data => dispatch(postsSuccess(data)))
      .catch(error => dispatch(postsError(error)))
      .then(data => dispatch(postRequest(id)))
      .then(data => dispatch(categoryRequest(category)))
      
    return {type: POSTS_REQUEST}
  }
}

export const postsSuccess = (posts) => ({
  type: POSTS_SUCCESS,
  posts,
})

export const postsError = error => ({
  type: POSTS_ERROR,
  error,
})