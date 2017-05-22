import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, completed, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

Task.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task;
