import { combineReducers } from 'redux';
import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

/**
 * Tasks reducer
 * @param {object[]} state Array of tasks
 * @param {object} action A Redux action
 * @return {array}
 */
function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];
    case TOGGLE_TASK:
      console.log(action)
      return state.map((todo, id) =>
        id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

/**
 * Visibility filter reducer
 * @param {string} state visibility filter
 * @param {object} action a redux action
 */
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

/**
 * root reducer
 */
const rootReducer = combineReducers({
  visibilityFilter,
  tasks
});

export default rootReducer;
