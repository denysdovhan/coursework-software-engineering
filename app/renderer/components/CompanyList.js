import React from 'react';
import PropTypes from 'prop-types';

import Company from './Company';
import BackgroundMessage from './BackgroundMessage';

const CompanyList = ({ companies }) => (
  <ul>
    {companies.length ? companies.map(company => (
      <Company key={company.id} {...company} />
    )) : (
      <BackgroundMessage label="There is no companies…">
        There is no companies with that name. Try to search again with other name.
      </BackgroundMessage>
    )}
  </ul>
);

CompanyList.propTypes = {
  // @todo: describe as company shape
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompanyList;
