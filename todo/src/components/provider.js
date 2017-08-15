import React from 'react';
import PropTypes from 'prop-types';

export class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  
  render = () => {
    return this.props.children;
  }

  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static childContextTypes = {
    store: PropTypes.object
  }
};
