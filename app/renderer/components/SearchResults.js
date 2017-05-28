import React from 'react';
import PropTypes from 'prop-types';

import VisibleCompanyList from '../containers/VisibleCompanyList';
import VisibleEventList from '../containers/VisibleEventList';

const includesQuery = query => str =>
  str.name.includes(query) || str.description.includes(query);

const SearchResults = ({ query, searchFor }) => {
  if (searchFor === 'companies') {
    return <VisibleCompanyList />;
  }
  if (searchFor === 'events') {
    return <VisibleEventList filter={includesQuery(query)} />;
  }
  return null;
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  searchFor: PropTypes.string.isRequired,
};

export default SearchResults;
