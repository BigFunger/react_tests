import React from 'react';
import { TodoList } from './todo_list';
import { store } from '../store';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

export class VisibleTodoList extends React.Component {
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
      todos,
      visibilityFilter
    } = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            todos,
            visibilityFilter
          )
        }
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          });
        }}
      />
    );
  }
}
