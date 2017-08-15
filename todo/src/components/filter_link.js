import React from 'react';
import PropTypes from 'prop-types';

import { store } from '../store';

export class FilterLink extends React.Component {
  render = () => {
    const {
      children,
      filter,
      currentFilter
    } = this.props;
    
    if (currentFilter === filter) {
      return (
        <span>
          {children}
        </span>
      );
    }
    
    return (
      <a
        href='#'
        onClick={e => {
          e.preventDefault();
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          });
        }}
      >
        {children}
      </a>
    );
  }

  static propTypes = {
    filter: PropTypes.string,
    currentFilter: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
}
