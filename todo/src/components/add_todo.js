import React from 'react';
import { store } from '../store';

let nextTodoId = 0;
export class AddTodo extends React.Component {
  render = () => {
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
}
