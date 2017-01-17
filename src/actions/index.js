import * as types from '../constants/action_types'

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text: text
  }
}

export function updateTodo(id, text) {
  return {
    type: types.UPDATE_TODO,
    id: id,
    text: text
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id: id
  }
}

export function markCompleted(id) {
  return {
    type: types.COMPLETE_TODO,
    id: id
  }
}

export function markAllCompleted() {
  return {
    type: types.COMPLETE_ALL
  }
}
