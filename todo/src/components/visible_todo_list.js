import React from 'react';
import PropTypes from 'prop-types';
import { TodoList } from './todo_list';

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

  static contextTypes = {
    store: PropTypes.object
  }
}
