import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';

const render = () => {
  ReactDOM.render(
    <App
      state={ store.getState() }
      onIncrement={() => { store.dispatch({ type: 'INCREMENT' }); }}
      onDecrement={() => { store.dispatch({ type: 'DECREMENT' }); }}
      onSquare={() => { store.dispatch({ type: 'SQUARE' }); }}
      onSquareRoot={() => { store.dispatch({ type: 'SQUAREROOT' }); }} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();