import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isActiveUser } from '../reducers';

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isAuthenticated: isActiveUser(state),
  };
};

export default withRouter(connect(mapStateToProps)(PublicRoute));