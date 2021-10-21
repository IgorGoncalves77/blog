import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_ERROR } from '../types/categoryTypes'

import { getPostsByCategory } from "../../api";

export const categoryRequest = (category) => {
  return (dispatch) => {
    getPostsByCategory(category)
      .then(data => dispatch(categorySuccess(data)))
      .catch(error => dispatch(categoryError(error)))

    return {type: CATEGORY_REQUEST}
  }
}

export const categorySuccess = (posts) => ({
  type: CATEGORY_SUCCESS,
  posts,
})

export const categoryError = error => ({
  type: CATEGORY_ERROR,
  error,
})
