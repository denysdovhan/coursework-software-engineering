import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import Organizer from './Organizer';
import Search from './Search';

const App = () => (
  <Router>
    <div>
      <PrivateRoute exact path="/" component={Organizer} />
      <PrivateRoute path="/search" component={Search} />
      <PublicRoute path="/login" component={LoginForm} />
      <PublicRoute path="/signup" component={SignUpForm} />
      <Route path="*" render={() => (<Redirect to="/login" />)} />
    </div>
  </Router>
);

export default App;
