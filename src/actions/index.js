import * as types from '../constants/action_types'

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const addTodo = makeActionCreator(types.ADD_TODO, 'todo');
export const updateTodo = makeActionCreator(types.UPDATE_TODO, 'id', 'todo');
export const deleteTodo = makeActionCreator(types.DELETE_TODO, 'id');
export const markCompleted = makeActionCreator(types.COMPLETED_TODO, 'id');
export const markAllCompleted = makeActionCreaator(types.COMPLETE_ALL);
