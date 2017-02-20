import {combineReducers } from 'redux';
import todos from './todos';
import authentication from './authentication';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ todos: todos,
  authentication: authentication,
  routing: routerReducer,
  form: formReducer });

export default rootReducer;
