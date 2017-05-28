import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';

const styles = {
  listStyle: 'none',
  margin: '1rem auto',
};

const Company = ({ name, officialName, edrpou }) => (
  <li style={styles}>
    <Card>
      <CardTitle title={name || officialName} subtitle={edrpou} />
    </Card>
  </li>
);

Company.propTypes = {
  edrpou: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
};

export default Company;