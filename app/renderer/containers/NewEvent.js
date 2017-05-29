import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../actions';

import AddIcon from 'material-ui/svg-icons/content/add';
import ExpandIcon from 'material-ui/svg-icons/navigation/expand-more';
import FlatButton from 'material-ui/FlatButton';
import PrimaryTextField from '../components/PrimaryTextField';
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
      <div>
        <PrimaryTextField
          value={this.state.nameInputValue}
          hintText="Describe your event..."
          onSubmit={this.handleOnSubmit}
          onChange={this.handleNameChange}
          secondaryLabel="Expand"
          primaryLabel="Add"
          secondaryIcon={<ExpandIcon />}
          primaryIcon={<AddIcon color="white" />}
          onSecodaryClick={this.handleExpandOpen}
        />
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
            <FlatButton primary label="Add" onClick={this.handleOnSubmit} />
          ]}
        />
      </div>
    );
  }
}

export default connect()(NewEvent);
