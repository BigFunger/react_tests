import expect from 'expect';
import deepFreeze from 'deep-freeze';

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const testVisibilityFilter = () => {
  const stateBefore = {};
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'FOO_BAR'
  };
  const stateAfter = 'FOO_BAR';

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter);
}

testVisibilityFilter();
console.log('visibility_filter.js All tests passed');