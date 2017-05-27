import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../actions';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AddIcon from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  Paper: {

  }
};

class NewEvent extends React.Component {
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
    this.props.dispatch(addEvent(this.state.inputValue));
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <Paper style={{
        padding: '2px 8px',
        margin: '0.5rem 0'
      }}>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            onChange={this.handleOnChange}
            hintText="Describe your event..."
            value={this.state.inputValue} />
          <RaisedButton
            primary
            type="submit"
            icon={<AddIcon color="white"/>} />
        </form>
      </Paper>
    );
  }
}

NewEvent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(NewEvent);
