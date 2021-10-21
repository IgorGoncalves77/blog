import { createStore as create, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from './reducers';

export const createStore = () => {
  const middleware = [logger, thunk];
  const store = create(rootReducer, applyMiddleware(...middleware));
  return { store };
};
