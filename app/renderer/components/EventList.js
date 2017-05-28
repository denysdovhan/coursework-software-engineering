import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events, toggleEventClick, updateEventClick, removeEventClick }) => {
  return (
    <ul>
      {events.map(event =>
        <Event
          key={event.id}
          {...event}
          toggleEvent={() => toggleEventClick(event.id)}
          removeEvent={() => removeEventClick(event.id)}
          updateEvent={updated => updateEventClick(event.id, updated)} />
      )}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string,
    startDate: PropTypes.object,
    finishDate: PropTypes.object,
    description: PropTypes.string,
  })).isRequired,
  removeEventClick: PropTypes.func.isRequired,
  toggleEventClick: PropTypes.func.isRequired,
  updateEventClick: PropTypes.func.isRequired,
};

export default EventList;
