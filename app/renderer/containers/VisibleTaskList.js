import { connect } from 'react-redux';
import { toggleTask, VisibilityFilters } from '../actions';
import TaskList from '../components/TaskList';

const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} = VisibilityFilters;

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return tasks;
    case SHOW_ACTIVE:
      return tasks.filter(t => !t.completed);
    case SHOW_COMPLETED:
      return tasks.filter(t => t.completed);
    default:
      return tasks;
  }
};

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      console.log(id);
      dispatch(toggleTask(id));
    }
  };
};

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default VisibleTaskList;
