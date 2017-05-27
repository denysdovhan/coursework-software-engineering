import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import UncheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const styles = {
  listStyle: 'none',
  margin: '1rem auto',
};

const Event = ({ text, completed, toggleEvent, removeEvent }) => (
  <li style={styles}>
    <Card>
      <CardTitle
        title={text}
        titleStyle={{ textDecoration: completed ? 'line-through' : 'none' }}
        subtitle="Date here" />
      <CardActions>
        <FlatButton
          primary
          onClick={toggleEvent}
          label={completed ? 'Mark as Undone' : 'Mark as Done'}
          icon={completed ? <CheckedIcon /> : <UncheckedIcon />} />
        <FlatButton label="Edit" icon={<EditIcon />} />
        <FlatButton label="Remove" onClick={removeEvent} icon={<DeleteIcon />} />
      </CardActions>
    </Card>
  </li>
);

Event.propTypes = {
  completed: PropTypes.bool.isRequired,
  removeEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggleEvent: PropTypes.func.isRequired,
};

export default Event;
