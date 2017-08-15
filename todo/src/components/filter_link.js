import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './link';
import { store } from '../store';

export class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render = () => {
    const {
      visibilityFilter
    } = store.getState();
    const {
      filter,
      children
    } = this.props;
    
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
}
