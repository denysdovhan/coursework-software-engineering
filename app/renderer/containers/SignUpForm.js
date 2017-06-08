import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import { userSignUp } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    processUserSignUp: (username, password) => dispatch(userSignUp(username, password))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
