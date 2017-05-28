import { combineReducers } from 'redux';
import {
  ADD_EVENT,
  UPDATE_EVENT,
  TOGGLE_EVENT,
  REMOVE_EVENT,
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

// @todo: make state more database-like

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
        ...action.data,
        completed: false,
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

function companies(state = [], action) {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return action.companies;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_COMPANIES_REQUEST:
      return true;
    case FETCH_COMPANIES_SUCCESS:
    case FETCH_COMPANIES_FAILURE:
      return false;
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
  events,
  companies,
  isFetching,
});

export default rootReducer;
