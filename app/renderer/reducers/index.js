import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter';
import events from './events';
import companies from './companies';
import isFetching from './isFetching';

// @todo: make state more database-like

/**
 * root reducer
 */
const rootReducer = combineReducers({
  visibilityFilter,
  events,
  companies,
  isFetching,
});

export default rootReducer;
