import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events, toggleEventClick, removeEventClick }) => {
  return (
    <ul>
      {events.map(event =>
        <Event
          key={event.id}
          {...event}
          toggleEvent={() => toggleEventClick(event.id)}
          removeEvent={() => removeEventClick(event.id)} />
      )}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  removeEventClick: PropTypes.func.isRequired,
  toggleEventClick: PropTypes.func.isRequired,
};

export default EventList;
