import { connect } from 'react-redux';
import {
  toggleEvent,
  removeEvent,
  VisibilityFilters
} from '../actions';
import EventList from '../components/EventList';

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} = VisibilityFilters;

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return events;
    case SHOW_ACTIVE:
      return events.filter(event => !event.completed);
    case SHOW_COMPLETED:
      return events.filter(event => event.completed);
    default:
      return events;
  }
};

const mapStateToProps = state => {
  return {
    events: getVisibleEvents(state.events, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEventClick: id => {
      dispatch(toggleEvent(id));
    },
    removeEventClick: id => {
      dispatch(removeEvent(id));
    }
  };
};

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default VisibleEventList;
