import { combineReducers } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { todos } from './todos';
import { visibilityFilter } from './visibility_filter';

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const testTodoApp = () => {
  const stateBefore = {};
  const action = {};
  const stateAfter = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todoApp(stateBefore, action)
  ).toEqual(stateAfter);
}

testTodoApp();

console.log('todo_app.js All tests passed');