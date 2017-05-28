import React from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  datepicker: {
    display: 'inline-block',
    width: '50%'
  }
};

class EventEditorDialog extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    finishDate: PropTypes.object,
    name: PropTypes.string.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
    onFinishDateChange: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onStartDateChange: PropTypes.func.isRequired,
    startDate: PropTypes.object,
  }

  static defaultProps = {
    finishDate: null,
    startDate: null,
    description: '',
  }

  state = {
    minStartDate: new Date(),
    minFinishDate: new Date(),
  }

  handleStartDateChange = (e, newDate) => {
    this.setState({
      minFinishDate: newDate,
    });
    this.props.onStartDateChange(e, newDate);
  }

  handleFinishDateChange = (e, newDate) => {
    this.props.onFinishDateChange(e, newDate);
  }

  handleDescriptionChange = (e, newValue) => {
    this.props.onDescriptionChange(e, newValue);
  }

  render() {
    return (
      <Dialog autoScrollBodyContent modal={false} {...this.props}>
        <TextField
          fullWidth
          autoFocus
          hintText="Describe your event..."
          floatingLabelText="Event name:"
          value={this.props.name}
          onChange={this.props.onNameChange} />
        <DatePicker
          floatingLabelText="Start date:"
          style={styles.datepicker}
          minDate={this.state.minStartDate}
          value={this.props.startDate}
          onChange={this.handleStartDateChange}/>
        <DatePicker
          floatingLabelText="Finish time:"
          style={styles.datepicker}
          minDate={this.state.minFinishDate}
          value={this.props.finishDate}
          onChange={this.handleFinishDateChange} />
        <TextField
          fullWidth
          hintText="More information about event..."
          floatingLabelText="Event description:"
          value={this.props.description}
          onChange={this.handleDescriptionChange}
          rows={2} />
      </Dialog>
    );
  }
}

export default EventEditorDialog;