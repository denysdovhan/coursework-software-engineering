import {
  USER_SIGNUP_SUCCESS,
} from '../actions';

export default function users(state = [], action) {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return [...state, {
        id: action.id,
        username: action.username,
        password: action.password,
      }];
    default:
      return state;
  }
}

export function findUserByUsername(state, username) {
  return state.some(user => user.username === username);
}

export function getUser(state, username, password) {
  return state.find(
    user => user.username === username && user.password === password
  );
}