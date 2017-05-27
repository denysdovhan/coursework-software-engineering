import React from 'react';
import { VisibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const Filterer = () => (
  <p>
    Show:
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

Filterer.propTypes = {};

export default Filterer;
