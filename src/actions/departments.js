import * as actionTypes from '../constants/action_types';
import * as utils from './utils';
import { push } from 'react-router-redux';

export const sendGetDepartments = (isRequesting) => {
  return {
    type: actionTypes.DEPARTMENTS_SEND_GET,
    isRequesting: isRequesting
  };
}

export const sendGetIsSuccessDepartments = (departments) => {
  return {
    type: actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS,
    departments: departments
  };
}

export const sendGetIsFailureDepartments = (error) => {
  return {
    type: actionTypes.DEPARTMENTS_SEND_GET_IS_FAILURE,
    error: error.message
  };
}

export const getDepartments = () => {
  return (dispatch, state) => {
    const url = `http://localhost:3001/departments`;
    dispatch(sendGetDepartments(true));

    fetch(url, { credentials: 'include', headers: {
      'Authorization': `Bearer ${state().authentication.jwt}`
      }
    })
      .then(utils.checkStatus)
      .then(utils.parseJSON)
      .then((departments) => {
        dispatch(sendGetDepartments(false));
        dispatch(sendGetIsSuccessDepartments(departments))
      })
      .catch((error) => {
        dispatch(sendGetIsFailureDepartments(error));
      })
  }
}
