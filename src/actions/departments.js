import * as actionTypes from '../constants/action_types';
import isObject from 'lodash/isObject';
import { push } from 'react-router-redux';
import { normalize } from 'normalizr';
import { departmentListSchema } from '../schemas/department';

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

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response)
  }

  return response.json().then(json => {
    const error = new Error(parseJSONerror(json) || response.statusText)
    return Promise.reject(Object.assign(error, { response }))
  })
}

function parseJSONerror(json){
  if (isObject(json) === false){
    return null;
  }

  return Object.keys(json).map((key) => {
    return key + ' ' + json[key].join(', ')
  }).join(" ");
}

function parseJSON(response) {
  return response.json()
}

export const redirectToOtherList = (path) => {
  return (dispatch) => {
    dispatch(push(path));
  }
}

export const getDepartments = () => {
  return (dispatch, state) => {
    const url = `http://localhost:3001/departments`;
    dispatch(sendGetDepartments(true));

    fetch(url, { credentials: 'include', headers: {
      'Authorization': `Bearer ${state().authentication.jwt}`
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((departments) => {
        dispatch(sendGetDepartments(false));
        const normalized = normalize(departments, departmentListSchema);
        console.log(normalized);
        dispatch(sendGetIsSuccessDepartments(departments))
      })
      .catch((error) => {
        dispatch(sendGetIsFailureDepartments(error));
      })
  }
}
