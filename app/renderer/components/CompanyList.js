import React from 'react';
import PropTypes from 'prop-types';

import Company from './Company';

const CompanyList = ({ companies }) => (
  <ul>
    {companies.map(company => (
      <Company key={company.id} {...company} />
    ))}
  </ul>
);

CompanyList.propTypes = {
  // @todo: describe as company shape
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompanyList;