import { createStore } from 'redux';
import './reducers/todo';

const defaultState = {
  counter: 0
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Firing INCREMENT Reducer');
      return Object.assign({}, state, { counter: state.counter + 1 });
    case 'DECREMENT':
      console.log('Firing DECREMENT Reducer');
      return Object.assign({}, state, { counter: state.counter - 1 });
    case 'SQUARE':
      console.log('Firing SQUARE Reducer');
      return Object.assign({}, state, { counter: state.counter * state.counter });
    case 'SQUAREROOT':
      console.log('Firing SQUAREROOT Reducer');
      return Object.assign({}, state, { counter: Math.sqrt(state.counter) });
    default:
      return state;
  }
};

export const store = createStore(counter);