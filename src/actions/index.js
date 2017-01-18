import * as actions from '../constants/action_types'
import { createActions } from 'redux-actions';

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  markCompleted,
  markAllCompleted} = createActions(
    actions.ADD_TODO,
    actions.UPDATE_TODO,
    actions.DELETE_TODO,
    actions.MARK_COMPLETED,
    actions.MARK_ALL_COMPLETED);
