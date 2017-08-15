import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './link';

export class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render = () => {
    const { store } = this.context;
    const {
      filter,
      children
    } = this.props;
    const {
      visibilityFilter
    } = store.getState();
    
    return (
      <Link
        active={ filter === visibilityFilter }
        onClick={() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          });
        }}
      >
        { children }
      </Link>
    );
  }

  static propTypes = {
    filter: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static contextTypes = {
    store: PropTypes.object
  }
}
