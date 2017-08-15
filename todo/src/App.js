import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './components/toggle_todo';
import './components/counter_list';

import { store } from './store';

let nextTodoId = 0;
class App extends React.Component {
  render = () => {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => 
            <li
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{
                textDecoration:
                  todo.completed ?
                    'line-through' :
                    'none'
              }}
            >
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }

  static propTypes = {
    todos: PropTypes.array
  }
}

export default App;
