/**
 * actions
 */
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
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

let nextTodoId = 0;
export function addTask(text) {
  return {
    type: ADD_TASK,
    id: nextTodoId++,
    text
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
