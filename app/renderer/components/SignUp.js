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
    fontWeight: 'lighter',
  },
  button: {
    marginTop: '2rem',
    marginRight: '1rem',
  }
};

class Login extends React.Component {

  state = {
    loginValue: '',
    loginError: '',
    passwordValue: '',
    passwordError: '',
    repeatPasswordValue: '',
    repeatPasswordError: '',
  }

  handleLoginChange = (e, newValue) => {
    this.setState({
      loginValue: newValue,
      loginError: !newValue.trim() ? this.state.loginError : '',
    });
  }

  handlePasswordChange = (e, newValue) => {
    this.setState({
      passwordValue: newValue,
      passwordError: !newValue.trim() ? this.state.passwordError : '',
    });
  }

  handleRepeatPasswordChange = (e, newValue) => {
    this.setState({
      repeatPasswordValue: newValue,
      repeatPasswordError: !newValue.trim() ? this.state.repeatPasswordValue : '',
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const {
      loginValue,
      passwordValue,
      repeatPasswordValue,
    } = this.state;

    if (!loginValue.trim()) {
      this.setState({ loginError: 'Login is required!' });
      return;
    }
    if (!passwordValue.trim()) {
      this.setState({ passwordError: 'Password is required!' });
      return;
    }
    if (!repeatPasswordValue.trim() || repeatPasswordValue.trim() !== passwordValue.trim()) {
      this.setState({ repeatPasswordError: 'Passwords are not equal!' });
      return;
    }

    this.props.processUserSignUp(loginValue, passwordValue);
  }

  render() {
    const {
      loginValue,
      loginError,
      passwordValue,
      passwordError,
      repeatPasswordValue,
      repeatPasswordError,
    } = this.state;

    return (
      <form style={styles.wrapper} onSubmit={this.handleOnSubmit}>
        <Paper style={styles.container} zDepth={2} >
          <h1 style={styles.heading}>Sign up</h1>
          <TextField
            fullWidth
            hintText="Type your login"
            floatingLabelText="Login"
            errorText={loginError}
            value={loginValue}
            onChange={this.handleLoginChange}
          />
          <TextField
            fullWidth
            type="password"
            hintText="Type your password"
            floatingLabelText="Password"
            errorText={passwordError}
            value={passwordValue}
            onChange={this.handlePasswordChange}
          />
          <TextField
            fullWidth
            type="password"
            hintText="Repeat your password"
            floatingLabelText="Repeat password"
            errorText={repeatPasswordError}
            value={repeatPasswordValue}
            onChange={this.handleRepeatPasswordChange}
          />
          <RaisedButton
            primary
            type="submit"
            style={styles.button}
            label="Sign up"
          />
          <Link to="/login">
            <RaisedButton
              style={styles.button}
              label="Login"
            />
          </Link>
        </Paper>
      </form>
    );
  }
}

export default Login;