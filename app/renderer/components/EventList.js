import React from 'react';
import PropTypes from 'prop-types';
import { grey500 } from 'material-ui/styles/colors';
import Event from './Event';

const EventList = ({ events, toggleEventClick, updateEventClick, removeEventClick }) => {
  return (
    <ul>
      {events.length ? events.map(event => (
        <Event
          key={event.id}
          {...event}
          toggleEvent={() => toggleEventClick(event.id)}
          removeEvent={() => removeEventClick(event.id)}
          updateEvent={updated => updateEventClick(event.id, updated)} />
      )) : (
        <h1 style={{
          textAlign: 'center',
          marginTop: '1rem',
          color: grey500,
        }}>
          There is no events…
        </h1>
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
