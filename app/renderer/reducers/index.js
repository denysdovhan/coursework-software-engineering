import { combineReducers } from 'redux';
import {
  ADD_EVENT,
  UPDATE_EVENT,
  TOGGLE_EVENT,
  REMOVE_EVENT,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

/**
 * Events reducer
 * @param {object[]} state Array of events
 * @param {object} action A Redux action
 * @return {array}
 */
function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return [{
        id: action.id,
        text: action.text,
        completed: false
      }, ...state];
    case UPDATE_EVENT:
      return state.map(event =>
        event.id === action.id ? { ...event, ...action.updated } : event
      );
    case REMOVE_EVENT:
      return state.filter(event => event.id !== action.id);
    case TOGGLE_EVENT:
      return state.map(event =>
        event.id === action.id ? { ...event, completed: !event.completed } : event
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
  events
});

export default rootReducer;
