import * as actionTypes from '../constants/action_types';
import {updateObject, updateItemInArray} from './utils';
const initialState = {
  todos: [],
  isRequesting: false,
  error: ''
}

export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET:{
        return updateObject(state, {isRequesting: action.meta.isRequesting,
          error: null})
      }
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:{
        return updateObject(state, {todos: action.payload})
      }
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:{
        return updateObject(state, {error: action.error})
      }
      case actionTypes.TODO_ADD:{
        const newTodos = state.todos.concat({
            id: state.todos.reduce((maxId, todo) =>
              Math.max(todo.id, maxId), -1) + 1,
            text: action.payload.text,
            completed: false,
            tag: action.payload.tag
        })
        return updateObject(state, {todos: newTodos})
      }
      case actionTypes.TODO_SEND_CREATE:{
        return updateObject(state, {isRequesting: action.meta.isRequesting,
          error: null})
      }
      case actionTypes.TODO_SEND_CREATE_IS_FAILURE:{
        return updateObject(state, {error: action.error})
      }
      case actionTypes.TODO_SEND_UPDATE:{
        return updateObject(state, {isRequesting: action.meta.isRequesting,
          error: null})
      }
      case actionTypes.TODO_MODIFY:{
        const newTodos = updateItemInArray(state.todos, action.payload.id,
          todo => { return updateObject(todo, {text: action.payload.text})}
        );
        return updateObject(state, {todos: newTodos})
      }
      case actionTypes.TODO_SEND_UPDATE_IS_FAILURE:{
        return updateObject(state, {error: action.error})
      }
      case actionTypes.TODO_SEND_DELETE:{
        return updateObject(state, {isRequesting: action.meta.isRequesting,
          error: null})
      }
      case actionTypes.TODO_REMOVE:{
        const newTodos = state.todos.filter(todo =>
          todo.id !== action.payload.id);
        return updateObject(state, {todos: newTodos});
      }
      case actionTypes.TODO_SEND_DELETE_IS_FAILURE:{
        return updateObject(state, {error: action.error})
      }
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
