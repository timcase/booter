import * as actionTypes from '../constants/action_types';
import {updateObject, updateItemInArray} from './utils';
const initialState = {
  todos: [],
  isRequesting: false,
  error: ''
}

function updateIsRequesting(state, action){
    return updateObject(state, {isRequesting: action.meta.isRequesting,
      error: null})
}

function updateError(state, action){
}

function loadTodos(state, action){
  return updateObject(state, {todos: action.payload})
}

function addTodo(state, action){
    const newTodos = state.todos.concat({
        id: state.todos.reduce((maxId, todo) =>
          Math.max(todo.id, maxId), -1) + 1,
        text: action.payload.text,
        completed: false,
        tag: action.payload.tag
    })
    return updateObject(state, {todos: newTodos})
}

function modifyTodo(state, action){
  const newTodos = updateItemInArray(state.todos, action.payload.id,
    todo => { return updateObject(todo, {text: action.payload.text})}
  );
  return updateObject(state, {todos: newTodos})
}

function removeTodo(state, action){
  const newTodos = state.todos.filter(todo =>
    todo.id !== action.payload.id);
  return updateObject(state, {todos: newTodos});
}

export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET: return updateIsRequesting(state, action)
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
        return loadTodos(state, action)
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:
        return updateError(state, action)
      case actionTypes.TODO_ADD: return addTodo(state, action)
      case actionTypes.TODO_SEND_CREATE:
        return updateIsRequesting(state, action)
      case actionTypes.TODO_SEND_CREATE_IS_FAILURE:
        return updateError(state, action)
      case actionTypes.TODO_SEND_UPDATE:
        return updateIsRequesting(state, action)
      case actionTypes.TODO_MODIFY: return modifyTodo(state, action)
      case actionTypes.TODO_SEND_UPDATE_IS_FAILURE:
        return updateError(state, action)
      case actionTypes.TODO_SEND_DELETE:
        return updateIsRequesting(state, action)
      case actionTypes.TODO_REMOVE: return removeTodo(state, action)
      case actionTypes.TODO_SEND_DELETE_IS_FAILURE:
        return updateError(state, action)
      default:
        return state;
    }

}

export const getVisibleTodos = (state, filter, tag) => {
  switch (filter) {
    case 'SHOW_ALL':
      return state
    case 'SHOW_COMPLETED':
      return state.filter(t => t.completed).filter(todo => todo.tag === tag)
    case 'SHOW_INCOMPLETE':
      return state.filter(t => !t.completed).filter(todo => todo.tag === tag)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
