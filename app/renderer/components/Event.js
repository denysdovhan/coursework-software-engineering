import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import EventEditorDialog from './EventEditorDialog';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import UncheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

// @fixme: write some optimizations
// @todo: more comments
class Event extends React.Component {
  static propTypes = {
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string,
    finishDate: PropTypes.object,
    name: PropTypes.string.isRequired,
    removeEvent: PropTypes.func.isRequired,
    startDate: PropTypes.object,
    toggleEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
  }

  static defaultProps = {
    description: '',
    finishDate: null,
    startDate: null,
  }

  state = {
    showEditingDialog: false,
    nameInputValue: this.props.name,
    startDateValue: this.props.startDate,
    finishDateValue: this.props.finishDate,
    descriptionInputValue: this.props.description,
  }

  handleEditingOpen = () => {
    this.setState({
      showEditingDialog: true
    });
  }

  handleEditingClose = () => {
    this.setState({
      nameInputValue: this.props.name,
      showEditingDialog: false,
    });
  }

  handleEditingSave = () => {
    this.props.updateEvent({
      name: this.state.nameInputValue,
      startDate: this.state.startDateValue,
      finishDate: this.state.finishDateValue,
      description: this.state.descriptionInputValue,
    });
    this.setState({
      showEditingDialog: false,
    });
  }

  handleNameChange = (e, newValue) => {
    this.setState({ nameInputValue: newValue });
  }

  handleStartDateChange = (e, newDate) => {
    this.setState({ startDateValue: newDate });
  }

  handleFinishDateChange = (e, newDate) => {
    this.setState({ finishDateValue: newDate });
  }

  handleDescriptionChange = (e, newValue) => {
    this.setState({ descriptionInputValue: newValue });
  }

  formatDate(date) {
    return date ? moment(date).calendar(null, {
      lastDay: '[Yesterday], MMM Do YYYY',
      sameDay: '[Today], MMM Do YYYY',
      nextDay: '[Tomorrow], MMM Do YYYY',
      lastWeek: '[last] dddd, MMM Do YYYY',
      nextWeek: 'dddd, MMM Do YYYY',
      sameElse: 'MMM Do YYYY'
    }) : '';
  }

  formatedDuration(start, finish) {
    if (!start) return '';
    if (!finish) return (
      <span>
        Due to <strong>{this.formatDate(start)}</strong>
      </span>
    );
    return (
      <span>
        From <strong>{this.formatDate(start)}</strong> to <strong>{this.formatDate(finish)}</strong>
      </span>
    );
  }

  styles = {
    listStyle: 'none',
    margin: '1rem auto',
  };

  render() {
    // @todo: move conditionals here
    // @todo: extract values from state and props here
    // @fixme: use values from props where it's possible
    return (
      <li style={this.styles}>
        <Card>
          <CardTitle
            title={this.state.nameInputValue}
            titleStyle={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
            subtitle={this.formatedDuration(this.props.startDate, this.props.finishDate)}
            subtitleStyle={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
            actAsExpander={Boolean(this.props.description)}
            showExpandableButton={Boolean(this.props.description)} />
          {Boolean(this.props.description) && (
            <CardText expandable style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
              {this.props.description}
            </CardText>
          )}
          <CardActions>
            <FlatButton
              primary
              onClick={this.props.toggleEvent}
              label={this.props.completed ? 'Mark as Undone' : 'Mark as Done'}
              icon={this.props.completed ? <CheckedIcon /> : <UncheckedIcon />} />
            <FlatButton
              label="Edit"
              onClick={this.handleEditingOpen}
              icon={<EditIcon />} />
            <FlatButton
              label="Remove"
              onClick={this.props.removeEvent}
              icon={<DeleteIcon />} />
          </CardActions>
        </Card>

        <EventEditorDialog
          open={this.state.showEditingDialog}
          onRequestClose={this.handleEditingClose}
          title={`Editing “${this.state.nameInputValue}”`}
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
            <FlatButton label="Dismiss" onClick={this.handleEditingClose} />,
            <FlatButton primary label="Save" onClick={this.handleEditingSave} />
          ]} />

      </li>
    );
  }
}

export default Event;
