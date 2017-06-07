import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState } from '../utils/localStorage';

import rootReducer from '../reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistentState = loadState();

export default createStore(
  rootReducer,
  persistentState,
  applyMiddleware(...middlewares)
);
