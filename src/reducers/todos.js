import * as actionTypes from '../constants/action_types';
const initialState = {
  todos: [],
  isLoading: false,
  hasError: false
}


export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET_REQUEST:
        return {
          ...state, isLoading: action.isLoading
        }
      case actionTypes.TODOS_SEND_GET_REQUEST_SUCCESSFUL:
        return {
          ...state,  todos: action.todos
        }
      case actionTypes.TODOS_SEND_GET_REQUEST_ERROR:
        return {
          ...state, hasError: action.hasError
        }
      default:
        return state;
    }

}
