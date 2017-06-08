import { connect } from 'react-redux';

import Login from '../components/Login';
import { userLogIn } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    processUserLogIn: (username, password) => dispatch(userLogIn(username, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
