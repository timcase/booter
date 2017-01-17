import * as types from '../constants/action_types'
import { createAction } from 'redux-actions';

export const addTodo = createAction(types.ADD_TODO);
export const updateTodo = createAction(types.UPDATE_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
export const markCompleted = createAction(types.COMPLETE_TODO);
export const markAllCompleted = createAction(types.COMPLETE_ALL);
