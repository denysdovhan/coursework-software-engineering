import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
} from '../actions';

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

export default isFetching;