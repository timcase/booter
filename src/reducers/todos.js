import * as actionTypes from '../constants/action_types';
const initialState = {
  todos: [],
  isLoading: false,
  hasFailure: false
}


export default function todos( state = initialState, action){

    switch (action.type) {
      case actionTypes.TODOS_SEND_GET:
        return {
          ...state, isLoading: action.isLoading
        }
      case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
        return {
          ...state,  todos: action.todos
        }
      case actionTypes.TODOS_SEND_GET_IS_FAILURE:
        return {
          ...state, hasFailure: action.hasFailure
        }
      default:
        return state;
    }

}
