import {combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import authentication from './authentication';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ todos: todos,
  authentication: authentication,
  routing: routerReducer,
  form: formReducer });

export default rootReducer;

export const getVisibleTodos = (state, filter, tag) =>
  fromTodos.getVisibleTodos(state, filter, tag);
