import React from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;
export class AddTodo extends React.Component {
  render = () => {
    const { store } = this.context;
    let input;

    // TODO: Find out about ref, this looks like two way binding...
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: nextTodoId++
          });
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  }

  static contextTypes = {
    store: PropTypes.object
  }
}
