import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './todo';

export class TodoList extends React.Component {
  render = () => {
    const {
      todos,
      onTodoClick
    } = this.props;

    return (
      <ul>
        {todos.map(todo => 
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }

  static propTypes = {
    todos: PropTypes.array
  }
}
