import { createAction } from 'redux-act';

export const addTodo = createAction("add a todo");
export const updateTodo = createAction("update a todo");
export const deleteTodo = createAction("delete a todo");
export const markAsCompletedTodo = createAction("mark a todo as completed");
export const markAllAsCompletedTodo = createAction("mark all todos as completed");
