import React from 'react';
import PropTypes from 'prop-types';

export class Todo extends React.Component {
  render = () => {
    const {
      text,
      completed,
      onClick
    } = this.props;

    return (
      <li
        onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through' :
              'none'
        }}
      >
        {text}
      </li>
    );
  }

  static propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onClick: PropTypes.func
  }
}
