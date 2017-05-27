import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import UncheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class Event extends React.Component {
  state = {
    eventNameInput: this.props.text,
    showEditingDialog: false,
  };

  handleNameInputChange = (e, newValue) => {
    this.setState({ eventNameInput: newValue });
  }

  handleEditingOpen = () => {
    this.setState({ showEditingDialog: true });
  }

  handleEditingClose = () => {
    this.setState({
      eventNameInput: this.props.text,
      showEditingDialog: false,
    });
  }

  handleEditingSave = () => {
    this.props.updateEvent({
      text: this.state.eventNameInput,
    });
    this.setState({
      showEditingDialog: false,
    });
  }

  styles = {
    listStyle: 'none',
    margin: '1rem auto',
  };

  render() {
    return (
      <li style={this.styles}>
        <Card>
          <CardTitle
            title={this.props.text}
            titleStyle={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
            subtitle="Date here" />
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
        <Dialog
          modal={false}
          title={`Editing “${this.props.text}”`}
          actions={[
            /* eslint react/jsx-key: 0 */
            <FlatButton label="Dismiss" onClick={this.handleEditingClose} />,
            <FlatButton primary keyboardFocused label="Save" onClick={this.handleEditingSave} />
          ]}
          open={this.state.showEditingDialog}
          onRequestClose={this.handleEditingClose} >
          <TextField
            fullWidth
            autoFocus
            hintText="Describe your event..."
            floatingLabelText="Event name:"
            value={this.state.eventNameInput}
            onChange={this.handleNameInputChange} />
          <Checkbox
            label={this.props.completed ? 'Mark as Undone' : 'Mark as Done'}
            checked={this.props.completed}
            onCheck={this.props.toggleEvent} />
        </Dialog>
      </li>
    );
  }
}

Event.propTypes = {
  completed: PropTypes.bool.isRequired,
  removeEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  toggleEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
};

export default Event;
