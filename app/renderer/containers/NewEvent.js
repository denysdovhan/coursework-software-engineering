import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../actions';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui/svg-icons/content/add';
import ExpandIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import EventEditorDialog from '../components/EventEditorDialog';

// @todo: split to presentational component and container
// @todo: write some optimizations
class NewEvent extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    showExpandDialog: false,
    nameInputValue: '',
    startDateValue: null,
    finishDateValue: null,
    descriptionInputValue: '',
  };

  handleOnSubmit = e => {
    const {
      nameInputValue,
      startDateValue,
      finishDateValue,
      descriptionInputValue
    } = this.state;
    e.preventDefault();
    if (!nameInputValue.trim()) return;
    this.props.dispatch(addEvent({
      name: nameInputValue,
      startDate: startDateValue,
      finishDate: finishDateValue,
      description: descriptionInputValue,
    }));
    this.setState({
      showExpandDialog: false,
      nameInputValue: '',
      startDateValue: null,
      finishDateValue: null,
      descriptionInputValue: ''
    });
  }

  handleExpandOpen = () => {
    this.setState({
      showExpandDialog: true
    });
  }

  handleExpandClose = () => {
    this.setState({
      showExpandDialog: false
    });
  }

  handleNameChange = (e, newValue) => {
    this.setState({
      nameInputValue: newValue
    });
  }

  handleStartDateChange = (e, newDate) => {
    this.setState({
      startDateValue: newDate,
    });
  }

  handleFinishDateChange = (e, newDate) => {
    this.setState({
      finishDateValue: newDate,
    });
  }

  handleDescriptionChange = (e, newValue) => {
    this.setState({
      descriptionInputValue: newValue,
    });
  }

  render() {
    return (
      <Paper style={{
        padding: '2px 8px',
        margin: '0.5rem 0'
      }}>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            onChange={this.handleNameChange}
            hintText="Describe your event..."
            style={{ width: '60%' }}
            value={this.state.nameInputValue} />
          <RaisedButton
            label="Expand"
            style={{
              width: '20%',
              margin: '0 1%'
            }}
            onClick={this.handleExpandOpen}
            icon={<ExpandIcon />} />
          <RaisedButton
            primary
            type="submit"
            label="Add"
            style={{ width: '18%' }}
            icon={<AddIcon color="white" />} />
        </form>
        <EventEditorDialog
          open={this.state.showExpandDialog}
          onRequestClose={this.handleExpandClose}
          title={`Adding “${this.state.nameInputValue || 'New Event'}”`}
          name={this.state.nameInputValue}
          onNameChange={this.handleNameChange}
          startDate={this.state.startDateValue}
          onStartDateChange={this.handleStartDateChange}
          finishDate={this.state.finishDateValue}
          onFinishDateChange={this.handleFinishDateChange}
          description={this.state.descriptionInputValue}
          onDescriptionChange={this.handleDescriptionChange}
          actions={[
            /* eslint react/jsx-key: 0 */
            <FlatButton label="Dismiss" onClick={this.handleExpandClose} />,
            <FlatButton primary label="Add" onClick={this.handleOnSubmit}/>
          ]} />
      </Paper>
    );
  }
}

export default connect()(NewEvent);
