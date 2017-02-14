import * as actionTypes from '../constants/action_types';
const initialState = {
  jwt: null,
  userName: null,
  isAuthenticated: false,
  isRequesting: false,
  error: ''
}

export default function authentication( state = initialState, action){

    switch (action.type) {
      case actionTypes.USER_SEND_CREATE:
        return {
          ...state, isRequesting: action.isRequesting, error: ''
        }
      case actionTypes.LOGIN_USER_SEND_CREATE:
        return {
          ...state, isRequesting: action.isRequesting, error: ''
        }
      case actionTypes.LOGIN_USER_SEND_CREATE_IS_SUCCESS:
        return {
          ...state, isAuthenticated: true, jwt: action.jwt,
          userName: action.userName
        }
      case actionTypes.LOGIN_USER_SEND_CREATE_IS_FAILURE:
        return {
          ...state, isRequesting: false, isAuthenticated: false, jwt: null,
          userName: null, error: action.error
        }
      case actionTypes.LOGOUT_USER:
        return {
          ...state, isRequesting: false, isAuthenticated: false, jwt: null,
          userName: null, error: null
        }
      default:
        return state;
    }

}
