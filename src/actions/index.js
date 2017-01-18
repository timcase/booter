import * as actions from '../constants/action_types'
import { createAction } from 'redux-actions';

export const addTodo = createAction(actions.TODO_ADD);
export const updateTodo = createAction(actions.TODO_UPDATE);
export const deleteTodo = createAction(actions.TODO_DELETE);
export const markCompletedTodo = createAction(actions.TODO_MARK_COMPLETED);
export const markAllCompletedTodo = createAction(actions.TODO_MARK_ALL_COMPLETED);
