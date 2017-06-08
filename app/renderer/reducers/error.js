import {
  FETCH_COMPANIES_FAILURE,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_FAILURE,
  HIDE_ERROR,
} from '../actions';

export default function error(state = null, action) {
  switch (action.type) {
    case FETCH_COMPANIES_FAILURE:
    case USER_SIGNUP_FAILURE:
    case USER_LOGIN_FAILURE:
      return action.error;
    case HIDE_ERROR:
      return null;
    default:
      return state;
  }
}
