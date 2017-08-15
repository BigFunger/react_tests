import React from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
  render = () => {
    const {
      onAddClick
    } = this.props;

    let input;

    // TODO: Find out about ref, this looks like two way binding...
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          onAddClick({
            text: input.value
          });
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  }

  static propTypes = {
    onAddClick: PropTypes.func
  }
}
