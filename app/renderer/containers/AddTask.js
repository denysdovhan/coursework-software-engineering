import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../actions';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.dispatch !== nextProps.dispatch) {
      return true;
    }
    if (this.state.inputValue !== nextState.inputValue) {
      return true;
    }
    return false;
  }

  handleOnChange(e, newValue) {
    this.setState({ inputValue: newValue });
  }

  handleOnSubmit(e){
    e.preventDefault();
    if (!this.state.inputValue.trim()) {
      return;
    }
    this.props.dispatch(addTask(this.state.inputValue));
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <Paper>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            onChange={this.handleOnChange}
            hintText="Your task..."
            value={this.state.inputValue} />
          <RaisedButton
            type="submit"
            label="Add Task" />
        </form>
      </Paper>
    );
  }
}

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTask);
