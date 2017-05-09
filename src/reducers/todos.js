import * as actions from '../constants/action_types';
import {updateObject, updateItemInArray} from './utils';
const initialState = {
  todos: [],
  isRequesting: false,
  error: ''
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

function updateIsRequesting(state, action){
  return updateObject(state, {isRequesting: action.meta.isRequesting,
    error: null})
}

function updateError(state, action){
  return state
}

function loadTodos(state, action){
  return updateObject(state, {todos: action.payload})
}

function addTodo(state, action){
  console.log(action);
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

const todosReducer = createReducer(initialState, {
  [actions.TODOS_SEND_GET]: updateIsRequesting,
  [actions.TODOS_SEND_GET_IS_SUCCESS]: loadTodos,
  [actions.TODOS_SEND_GET_IS_FAILURE]: updateError,
  [actions.TODO_ADD]: addTodo,
  [actions.TODO_SEND_CREATE]: updateIsRequesting,
  [actions.TODO_SEND_CREATE_IS_FAILURE]: updateError,
  [actions.TODO_SEND_UPDATE]: updateIsRequesting,
  [actions.TODO_MODIFY]: modifyTodo,
  [actions.TODO_SEND_UPDATE_IS_FAILURE]: updateError,
  [actions.TODO_SEND_DELETE]: updateIsRequesting,
  [actions.TODO_REMOVE]: removeTodo,
  [actions.TODO_SEND_DELETE_IS_FAILURE]: updateIsRequesting
});

export default function todos( state = initialState, action){
    return todosReducer(state, action);
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
