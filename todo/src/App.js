import React from 'react';
import './App.css';
import { VisibleTodoList } from './containers/visible_todo_list';
import { AddTodo } from './components/add_todo';
import { Footer } from './components/footer';

export class App extends React.Component {
  render = () => {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
};
