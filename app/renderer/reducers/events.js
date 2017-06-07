import {
  ADD_EVENT,
  UPDATE_EVENT,
  TOGGLE_EVENT,
  REMOVE_EVENT,
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

export default events;
