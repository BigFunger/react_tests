import React from 'react';
import PropTypes from 'prop-types';

export class Link extends React.Component {
  render = () => {
    const {
      active,
      children,
      onClick
    } = this.props;
    
    if (active) {
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
          onClick();
        }}
      >
        {children}
      </a>
    );
  }

  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
}
