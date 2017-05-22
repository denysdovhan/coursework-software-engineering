import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <ul>
      {tasks.map(task =>
        <Task
          key={task.id}
          {...task}
          onClick={() => onTaskClick(task.id)} />
      )}
    </ul>
  );
};

TaskList.propTypes = {
  onTaskClick: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TaskList;
