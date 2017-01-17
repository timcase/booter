import * as types from '../constants/action_types'
import { createActions } from 'redux-actions';

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  markCompleted,
  markAllCompleted} = createActions(
    types.ADD_TODO,
    types.UPDATE_TODO,
    types.DELETE_TODO,
    types.MARK_COMPLETED,
    types.MARK_ALL_COMPLETED);
