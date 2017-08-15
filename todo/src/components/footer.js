import React from 'react';
import PropTypes from 'prop-types';
import { FilterLink } from './filter_link';

export class Footer extends React.Component {
  render = () => {
    const {
      visibilityFilter,
      onFilterClick
    } = this.props;

    return (
      <p>
        Show:
        {' '}
        <FilterLink
          filter='SHOW_ALL'
          currentFilter={visibilityFilter}
          onClick={onFilterClick}
        >
          All
        </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_ACTIVE'
          currentFilter={visibilityFilter}
          onClick={onFilterClick}
        >
          Active
        </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_COMPLETED'
          currentFilter={visibilityFilter}
          onClick={onFilterClick}
        >
          Completed
        </FilterLink>
      </p>
    );
  }

  static propTypes = {
    visibilityFilter: PropTypes.string,
    onFilterClick: PropTypes.func
  }
}
