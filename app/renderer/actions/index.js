import { v4 } from 'node-uuid';

/**
 * actions
 */
export const ADD_EVENT = 'ADD_EVENT';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * filters
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action creators
 */

export function addEvent({ name, description, startDate, finishDate }) {
  return {
    type: ADD_EVENT,
    data: {
      id: v4(),
      name,
      description,
      startDate,
      finishDate,
    }
  };
}

export function toggleEvent(id) {
  return {
    type: TOGGLE_EVENT,
    id
  };
}

export function updateEvent(id, updated) {
  return {
    type: UPDATE_EVENT,
    id,
    updated
  };
}

export function removeEvent(id) {
  return {
    type: REMOVE_EVENT,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
