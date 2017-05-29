import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  paper: {
    padding: '2px 8px',
    margin: '0.5rem 0',
  },
  input: {
    width: '67%',
    fontSize: '1.1rem',
  },
  primary: {
    width: '15%',
  },
  secondary: {
    width: '15%',
    margin: '0 1%',
  },
};

const PrimaryTextFiled = ({
  onSubmit,
  onChange,
  value,
  hintText,
  secondaryIcon,
  onSecodaryClick,
  primaryIcon,
}) => (
  <Paper style={styles.paper}>
    <form onSubmit={onSubmit}>
      <TextField
        underlineShow={false}
        onChange={onChange}
        hintText={hintText}
        style={styles.input}
        value={value}
      />
      <RaisedButton
        style={styles.secondary}
        onClick={onSecodaryClick}
        icon={secondaryIcon}
      />
      <RaisedButton
        primary
        type="submit"
        style={styles.primary}
        icon={primaryIcon}
      />
    </form>
  </Paper>
);

PrimaryTextFiled.propTypes = {
  hintText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSecodaryClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  primaryIcon: PropTypes.node.isRequired,
  secondaryIcon: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default PrimaryTextFiled;
