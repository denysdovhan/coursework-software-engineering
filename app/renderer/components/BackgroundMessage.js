import React from 'react';
import PropTypes from 'prop-types';
import { grey500 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    color: grey500,
  },
  heading: {
    fontWeight: 'lighter',
  },
  content: {
    marginTop: '0.5rem',
  },
  loader: {
    marginTop: '2rem',
  },
};

const BackgroundMessage = ({ label, children, loading }) => (
  <div style={styles.container}>
    <h1 style={styles.heading}>{label}</h1>
    <div style={styles.content}>
      { children }
    </div>
    {loading && <CircularProgress style={styles.loader} size={60} />}
  </div>
);

BackgroundMessage.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

BackgroundMessage.defaultProps = {
  loading: false,
  children: null,
};

export default BackgroundMessage;
