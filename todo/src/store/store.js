import { createStore } from 'redux';
import { todoApp } from './reducers/todo_app';

export const store = createStore(todoApp);