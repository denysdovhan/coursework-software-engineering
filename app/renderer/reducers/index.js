import { combineReducers } from 'redux';

import activeUser, * as fromActiveUser from './activeUser';
import visibilityFilter from './visibilityFilter';
import events from './events';
import users, * as fromUsers from './users';
import companies from './companies';
import isFetching from './isFetching';

// @todo: make state more database-like

/**
 * root reducer
 */
export default combineReducers({
  activeUser,
  visibilityFilter,
  events,
  users,
  companies,
  isFetching,
});

/**
 * Selectors
 */

export const getActiveUserID = (state) =>
  fromActiveUser.getActiveUserID(state.activeUser);

export const findUserByUsername = (state, username) =>
  fromUsers.findUserByUsername(state.users, username);

export const getUser = (state, username, password) =>
  fromUsers.getUser(state.users, username, password);