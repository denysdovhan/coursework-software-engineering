import React from 'react';
import { Link } from 'react-router-dom';
import { cyan500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cyan500,
  },
  container: {
    width: '50%',
    padding: '3rem',
  },
  heading: {
    fontWeight: 'lighter'
  },
  button: {
    marginTop: '2rem',
    marginRight: '1rem',
  }
};

class Login extends React.Component {

  state = {
    loginInputValue: '',
    loginInputError: '',
    passwordInputValue: '',
    passwordInputError: '',
  }

  handleLoginChange = (e, newValue) => {
    this.setState({
      loginInputValue: newValue,
      loginInputError: !newValue.trim() ? this.state.loginInputError : '',
    });
  }

  handlePasswordChange = (e, newValue) => {
    this.setState({
      passwordInputValue: newValue,
      passwordInputError: !newValue.trim() ? this.state.passwordInputError : '',
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const {
      loginInputValue,
      passwordInputValue
    } = this.state;

    if (!loginInputValue.trim()) {
      this.setState({ loginInputError: 'Login is required!' });
      return;
    }
    if (!passwordInputValue.trim()) {
      this.setState({ passwordInputError: 'Password is required!' });
      return;
    }

    this.props.processUserLogIn(loginInputValue, passwordInputValue);
  }

  render() {
    const {
      loginInputValue,
      loginInputError,
      passwordInputValue,
      passwordInputError,
    } = this.state;

    return (
      <form style={styles.wrapper} onSubmit={this.handleOnSubmit}>
        <Paper style={styles.container} zDepth={2} >
          <h1 style={styles.heading}>Login</h1>
          <TextField
            fullWidth
            hintText="Type your login"
            floatingLabelText="Login"
            errorText={loginInputError}
            value={loginInputValue}
            onChange={this.handleLoginChange}
          />
          <TextField
            fullWidth
            type="password"
            hintText="Type your password"
            floatingLabelText="Password"
            errorText={passwordInputError}
            value={passwordInputValue}
            onChange={this.handlePasswordChange}
          />
          <RaisedButton
            primary
            type="submit"
            style={styles.button}
            label="Login"
          />
          <Link to="/signup">
            <RaisedButton
              style={styles.button}
              label="Sign up"
            />
          </Link>
        </Paper>
      </form>
    );
  }
}

export default Login;