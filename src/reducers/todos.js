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
          ...state, isRequesting: true, error: ''
        }
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
        return {
          ...state,  isRequesting: false, todos: action.todos, error: ''
        }
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:
        return {
          ...state, isRequesting: false, error: action.error
        }
      case actionTypes.TODO_ADD:
        return {
          ...state, todos: [...state.todos,
          {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.todo.text
          }]
          }
      case actionTypes.TODO_SEND_CREATE:
        return {
          ...state, isRequesting: true, error: ''
        }
      case actionTypes.TODO_SEND_CREATE_IS_FAILURE:
        return {
          ...state, isRequesting: false, error: action.error
        }
      case actionTypes.TODO_SEND_CREATE_IS_SUCCESS:
        return {
          ...state, isRequesting: false, error: ''
        }
      case actionTypes.TODO_SEND_UPDATE:
        return {
          ...state, isRequesting: action.isLoading, error: ''
        }
      case actionTypes.TODO_MODIFY:
        return {
          ...state, todos: state.todos.map(todo => todo.id === action.id ?
            {...todo, id: action.todo.id, text: action.todo.text,
              completed: action.todo.completed }
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
