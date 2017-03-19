import * as actionTypes from '../constants/action_types';
const initialState = {
  todos: [],
  isRequesting: false,
  error: ''
}


export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET:
        return {
          ...state, isRequesting: action.isLoading, error: ''
        }
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
        return {
          ...state,  todos: action.todos, error: ''
        }
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:
        return {
          ...state, error: action.error
        }
      case actionTypes.TODO_ADD:
        return {
          ...state, todos: [...state.todos,
          {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.todo.text,
            tag: action.todo.tag
          }]
          }
      case actionTypes.TODO_SEND_CREATE:
        return {
          ...state, isRequesting: action.isLoading, error: ''
        }
      case actionTypes.TODO_SEND_CREATE_IS_FAILURE:
        return {
          ...state, error: action.error
        }
      case actionTypes.TODO_SEND_UPDATE:
        return {
          ...state, isRequesting: action.isLoading, error: ''
        }
      case actionTypes.TODO_MODIFY:
        return {
          ...state, todos: state.todos.map(todo => todo.id === action.todo.id ?
            {...todo, id: action.todo.id, text: action.todo.text,
              completed: action.todo.completed, tag: action.todo.tag }
            : todo)
        }
      case actionTypes.TODO_SEND_UPDATE_IS_FAILURE:
        return {
          ...state, error: action.error
        }
      case actionTypes.TODO_SEND_DELETE:
        return {
          ...state, isRequesting: action.isLoading
        }
      case actionTypes.TODO_REMOVE:
        return {
          ...state, todos: state.todos.filter(todo => todo.id !== action.todo.id)
        }
      case actionTypes.TODO_SEND_DELETE_IS_FAILURE:
        return {
          ...state, error: action.error
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
