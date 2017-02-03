import {combineReducers } from 'redux';
import todos from './todos';
import authentication from './authentication';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({ todos: todos,
  authentication: authentication,
  routing: routerReducer });

export default rootReducer;
