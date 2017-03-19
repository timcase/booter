import { createSelector } from 'reselect';
import replace from 'lodash/replace';

const getTagFilter = (state, filter) => {
  return replace(state.routing.locationBeforeTransitions.pathname, '/lists/', '') ||
   'inbox'
}
const getTodos = (state, filter) => state.todos.todos;
const getVisibilityFilter = (state, filter) => filter;

export const getVisibleTodos = createSelector(
  [getTagFilter, getTodos, getVisibilityFilter],
  (tag, todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed).filter(todo => todo.tag === tag)
      case 'SHOW_INCOMPLETE':
        return todos.filter(t => !t.completed).filter(todo => todo.tag === tag)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
);
