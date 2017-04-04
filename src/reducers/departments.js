import * as actionTypes from '../constants/action_types';
const initialState = {
  departments: [],
  isRequesting: false,
  error: ''
}

export default function departments( state = initialState, action){

    switch (action.type) {
      case actionTypes.DEPARTMENTS_SEND_GET:
        return {
          ...state, isRequesting: action.isLoading, error: ''
        }
      case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
        return {
          ...state,  departments: action.departments, error: ''
        }
      case actionTypes.DEPARTMENTS_SEND_GET_IS_FAILURE:
        return {
          ...state, error: action.error
        }
      default:
        return state;
    }

}
