import { combineReducers } from 'redux';

import activeUser, * as fromActiveUser from './activeUser';
import visibilityFilter from './visibilityFilter';
import events, * as fromEvents from './events';
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

// state.events

export const getEventsByUserId = (state, userId) =>
  fromEvents.getEventsByUserId(state.events, userId);

// state.activeUser

export const isActiveUser = (state) =>
  fromActiveUser.isActiveUser(state.activeUser);

export const getActiveUserId = state =>
  fromActiveUser.getActiveUserId(state.activeUser);

// state.users

export const findUserByUsername = (state, username) =>
  fromUsers.findUserByUsername(state.users, username);

export const getUser = (state, username, password) =>
  fromUsers.getUser(state.users, username, password);