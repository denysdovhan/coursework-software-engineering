import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import ToggleMenu from './ToggleMenu';

import { userLogOut } from '../actions';
import { isActiveUser } from '../reducers';

const styles = {
  position: 'fixed',
  top: 0
};

const AppHeader = ({ title, username, handleUserLogOut }) => (
  // @todo: add position: fixed
  <AppBar
    style={styles}
    title={`${title} (${username})`}
    iconElementLeft={<ToggleMenu />}
    iconElementRight={
      <IconButton onClick={() => handleUserLogOut()}>
        <LogOutIcon color="white" />
      </IconButton>
    }
    zDepth={2}
  />
);

AppHeader.propTypes = {
  handleUserLogOut: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    isAuthenticated: isActiveUser(state),
    username: state.activeUser.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUserLogOut: () => dispatch(userLogOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
