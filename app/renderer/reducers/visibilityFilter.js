import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

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

export default visibilityFilter;
