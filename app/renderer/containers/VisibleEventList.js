import { connect } from 'react-redux';
import {
  toggleEvent,
  updateEvent,
  removeEvent,
} from '../actions';
import EventList from '../components/EventList';
import { getEventsByUserId, getActiveUserId } from '../reducers';
import { getEventsByFilter } from '../reducers/events';

const mapStateToProps = (state, { filter }) => {
  return {
    events: filter ?
      getEventsByUserId(state, getActiveUserId(state)).filter(filter) :
      getEventsByFilter(
        getEventsByUserId(state, getActiveUserId(state)),
        state.visibilityFilter
      ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEventClick: id => {
      dispatch(toggleEvent(id));
    },
    updateEventClick: (id, updated) => {
      dispatch(updateEvent(id, updated));
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
