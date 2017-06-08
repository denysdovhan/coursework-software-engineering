import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { hideError } from '../actions';


class ErrorSnackbar extends React.Component {
  render() {
    const { error, handleRequestClose } = this.props;
    return (
      <Snackbar
        open={!!error}
        action={
          <span onClick={handleRequestClose}>Hide</span>
        }
        message={error === null ? '' : error.toString()}
        autoHideDuration={5000}
        onRequestClose={handleRequestClose}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRequestClose: () => dispatch(hideError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
