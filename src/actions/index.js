import { createAction } from 'redux-act';

export const addTodo = createAction("add a todo");
export const updateTodo = createAction("update a todo");
export const deleteTodo = createAction("delete a todo");
export const markAsCompletedTodo = createAction("mark a todo as completed");
export const markAllAsCompletedTodo = createAction("mark all todos as completed");


// import * as types from '../constants/action_types'

// function makeActionCreator(type, ...argNames) {
//   return function(...args) {
//     let action = { type }
//     argNames.forEach((arg, index) => {
//       action[argNames[index]] = args[index]
//     })
//     return action
//   }
// }

// export const addTodo = makeActionCreator(types.ADD_TODO, 'text');
// export const updateTodo = makeActionCreator(types.UPDATE_TODO, 'id', 'text');
// export const deleteTodo = makeActionCreator(types.DELETE_TODO, 'id');
// export const markCompleted = makeActionCreator(types.COMPLETE_TODO, 'id');
// export const markAllCompleted = makeActionCreator(types.COMPLETE_ALL);
