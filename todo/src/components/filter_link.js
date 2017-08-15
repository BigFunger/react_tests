import React from 'react';
import PropTypes from 'prop-types';

export class FilterLink extends React.Component {
  render = () => {
    const {
      children,
      filter,
      currentFilter,
      onClick
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
          onClick(filter);
        }}
      >
        {children}
      </a>
    );
  }

  static propTypes = {
    filter: PropTypes.string,
    currentFilter: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
}
