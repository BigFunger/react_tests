import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { TodoList } from './components/todo_list';
import { AddTodo } from './components/add_todo';
import { Footer } from './components/footer';

import { store } from './store';

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

let nextTodoId = 0;
export class App extends React.Component {
  render = () => {
    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

    return (
      <div>
        <AddTodo
          onAddClick={({ text }) => {
            store.dispatch({
              type: 'ADD_TODO',
              text,
              id: nextTodoId++
            });
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={(id) => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            });
          }}
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            });
          }}
        />
      </div>
    );
  }

  static propTypes = {
    todos: PropTypes.array,
    visibilityFilter: PropTypes.string
  }
};
