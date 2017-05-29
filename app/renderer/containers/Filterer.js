import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setVisibilityFilter, VisibilityFilters } from '../actions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const Filterer = ({ value, onChange }) => (
  <SelectField floatingLabelText="Show events:" value={value} onChange={onChange}>
    <MenuItem value={SHOW_ALL} primaryText="All" />
    <MenuItem value={SHOW_ACTIVE} primaryText="Active" />
    <MenuItem value={SHOW_COMPLETED} primaryText="Completed" />
  </SelectField>
);

Filterer.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onChange: (event, index, value) => dispatch(setVisibilityFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filterer);
