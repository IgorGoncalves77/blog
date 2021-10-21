import { combineReducers } from 'redux';
import { reducer as postReducer } from './showPostReducer'
import { reducer as postsReducer } from './showPostsReducer'
import { reducer as categoryReducer } from './showCategoryReducer'
import { reducer as postDeleteReducer } from './deletePostReducer'
import { reducer as postVoteReducer } from './votePostReducer'
import { reducer as commentsReducer } from './showCommentsReducer'
import { reducer as commentsDeleteReducer } from './deleteCommentReducer'
import { reducer as commentsVoteReducer } from './voteCommentReducer'
import { reducer as orderPostsReducer } from './orderPostsReducer'

export default combineReducers({
  postReducer,
  postsReducer,
  categoryReducer,
  postDeleteReducer,
  postVoteReducer,
  commentsReducer,
  commentsDeleteReducer,
  commentsVoteReducer,
  orderPostsReducer,
});