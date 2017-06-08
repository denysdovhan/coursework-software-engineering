import {
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_LOGOUT,
} from '../actions';

export default function activeUser(state = null, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
    case USER_SIGNUP_SUCCESS:
      return {
        id: action.id,
        username: action.username,
        password: action.password,
      };
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}

export function isActiveUser(state) {
  return (state !== null) && ('id' in state) && ('username' in state);
}

export function getActiveUserId(state) {
  return state.id || undefined;
}