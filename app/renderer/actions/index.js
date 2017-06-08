import { v4 } from 'node-uuid';
import { getActiveUserId, findUserByUsername, getUser } from '../reducers';

/**
 * actions
 */
export const ADD_EVENT = 'ADD_EVENT';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const FETCH_COMPANIES_REQUEST = 'FETCH_COMPANIES_REQUEST';
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_FAILURE = 'FETCH_COMPANIES_FAILURE';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';

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

export function addEvent({ name, description, startDate, finishDate }) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_EVENT,
      userId: getActiveUserId(getState()),
      id: v4(),
      name,
      description,
      startDate,
      finishDate,
    });
  };
}

export function toggleEvent(id) {
  return {
    type: TOGGLE_EVENT,
    id
  };
}

export function updateEvent(id, updated) {
  return {
    type: UPDATE_EVENT,
    id,
    updated
  };
}

export function removeEvent(id) {
  return {
    type: REMOVE_EVENT,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}

export function fetchCompanies(officialName) {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    }

    dispatch({
      type: FETCH_COMPANIES_REQUEST,
    });

    return fetch(encodeURI(`http://edr.data-gov-ua.org/api/companies?where={"officialName":{"contains":"${officialName}"}}&limit=20&skip=0&sort=id`))
      .then(res => res.json())
      .then(companies => dispatch({
        type: FETCH_COMPANIES_SUCCESS,
        companies,
      }))
      .catch(error => dispatch({
        type: FETCH_COMPANIES_FAILURE,
        error,
      }));
  };
}

export function userSignUp(username, password) {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
      username,
      password,
    });

    if (findUserByUsername(getState(), username)) {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        error: new Error('User is already exists'),
      });
    } else {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        id: v4(),
        username,
        password,
      });
    }
  };
}

export function userLogIn(username, password) {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
      username,
      password,
    });

    if (!findUserByUsername(getState(), username)) {
      return dispatch({
        type: USER_LOGIN_FAILURE,
        error: new Error('User does not exists!'),
      });
    }

    const activeUser = getUser(getState(), username, password);

    if (activeUser) {
      return dispatch({
        type: USER_LOGIN_SUCCESS,
        ...activeUser,
      });
    }

    return dispatch({
      type: USER_LOGIN_FAILURE,
      error: new Error('Password is wrong!'),
    });
  };
}

export function userLogOut() {
  return {
    type: USER_LOGOUT,
  };
}
