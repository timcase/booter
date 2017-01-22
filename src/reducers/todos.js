import * as actionTypes from '../constants/action_types';
const initialState = {
  todos: [],
  isRequesting: false,
  hasFailure: false
}


export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET:
        return {
          ...state, isRequesting: action.isLoading
        }
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
        return {
          ...state,  todos: action.todos
        }
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:
        return {
          ...state, hasFailure: action.hasFailure
        }
      case actionTypes.TODO_SEND_CREATE:
        return {
          ...state, isRequesting: action.isLoading
        }
      case actionTypes.TODO_SEND_CREATE_IS_SUCCESS:
        return {
          ...state, todos: [...state.todos, action.todo]
        }
      case actionTypes.TODO_SEND_CREATE_IS_FAILURE:
        return {
          ...state, hasFailure: action.hasFailure
        }
      case actionTypes.TODO_SEND_UPDATE:
        return {
          ...state, isRequesting: action.isLoading
        }
      case actionTypes.TODO_SEND_UPDATE_IS_SUCCESS:
        return {
          ...state, todos: state.todos.map(todo => todo.id === action.todo.id ?
            {...todo, text: action.todo.text, completed: action.todo.completed }
            : todo)
        }
      case actionTypes.TODO_SEND_UPDATE_IS_FAILURE:
        return {
          ...state, hasFailure: action.hasFailure
        }
      case actionTypes.TODO_SEND_DELETE:
        return {
          ...state, isRequesting: action.isLoading
        }
      case actionTypes.TODO_SEND_DELETE_IS_SUCCESS:
        return {
          ...state, todos: state.todos.filter(todo => todo.id !== action.todo.id)
        }
      case actionTypes.TODO_SEND_DELETE_IS_FAILURE:
        return {
          ...state, hasFailure: action.hasFailure
        }
      default:
        return state;
    }

}
