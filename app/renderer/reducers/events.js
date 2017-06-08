import {
  ADD_EVENT,
  UPDATE_EVENT,
  TOGGLE_EVENT,
  REMOVE_EVENT,
  VisibilityFilters,
} from '../actions';

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} = VisibilityFilters;

/**
 * Events reducer
 * @param {object[]} state Array of events
 * @param {object} action A Redux action
 * @return {array}
 */
export default function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return [{
        userId: action.userId,
        id: action.id,
        name: action.name,
        description: action.description,
        startDate: action.startDate,
        finishDate: action.finishDate,
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

export function getEventsByFilter(state, filter) {
  switch (filter) {
    case SHOW_ALL:
      return state;
    case SHOW_ACTIVE:
      return state.filter(event => !event.completed);
    case SHOW_COMPLETED:
      return state.filter(event => event.completed);
    default:
      return state;
  }
}

export function getEventsByUserId(state, userId) {
  return state.filter(event => event.userId === userId);
}