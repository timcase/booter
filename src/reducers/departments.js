import * as actionTypes from '../constants/action_types';
import {combineReducers } from 'redux';

const initialState = {
  isRequesting: false,
  error: ''
}

const byId = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
      return {
        ...state, ...action.departments.reduce((obj, department) => {
          obj[department.id] = department;
          return obj
        }, {}), error: ''
      }
    default:
      return state;
  }

};

const allIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
      return [
        ...state, ...action.departments.map(d => { return d.id })
      ]
    default:
      return state;

  }
};

const departments = combineReducers({byId: byId, allIds: allIds});
export default departments;

export const getAllDepartments= (state) =>{
  if (state.allIds.length > 0) {
    return state.allIds.map(id => state.byId[id])
  } else {
    return [];
  }
}
// export default function departments( state = initialState, action){

//     switch (action.type) {
//       case actionTypes.DEPARTMENTS_SEND_GET:
//         return {
//           ...state, isRequesting: action.isLoading, error: ''
//         }
//       case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
//         return {
//           ...state,  departments: action.departments, error: ''
//         }
//       case actionTypes.DEPARTMENTS_SEND_GET_IS_FAILURE:
//         return {
//           ...state, error: action.error
//         }
//       default:
//         return state;
//     }

// }
