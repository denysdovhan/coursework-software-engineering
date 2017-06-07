import {
  FETCH_COMPANIES_SUCCESS,
} from '../actions';

/**
 * Save fetched companies from server
 * @param {object[]} state Array of fetched companies
 * @param {object} action  A redux action
 */
function companies(state = [], action) {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return action.companies;
    default:
      return state;
  }
}

export default companies;