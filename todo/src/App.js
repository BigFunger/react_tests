import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { VisibleTodoList } from './components/visible_todo_list';
import { AddTodo } from './components/add_todo';
import { Footer } from './components/footer';

export class App extends React.Component {
  render = () => {
    const {
      store
    } = this.props;

    return (
      <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
      </div>
    );
  }

  static propTypes = {
    store: PropTypes.object
  }
};
