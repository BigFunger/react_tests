import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={ state.todos }
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();