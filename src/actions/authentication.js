import * as actionTypes from '../constants/action_types';
import jwtDecode from 'jwt-decode';
import push from 'react-router-redux';
import isObject from 'lodash/isObject';

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

export const sendCreateLoginUser = (isRequesting) => {
  return {
    type: actionTypes.LOGIN_USER_SEND_CREATE,
    isRequesting: isRequesting
  };
}

export const sendCreateLoginUserIsSuccess = (jwt, decoded) => {
  localStorage.setItem('jwt', jwt);
  return {
    type: actionTypes.LOGIN_USER_SEND_CREATE_IS_SUCCESS,
    jwt: jwt,
    userName: decoded.userName
  }
}

export const sendCreateLoginUserIsFailure = (error) => {
  localStorage.removeItem('jwt');
  return {
    type: actionTypes.LOGIN_USER_SEND_CREATE_IS_FAILURE,
    error: error.message
  }
}


export const loginUser = (email, password, redirect="/") => {
  const url = 'http://localhost:3001/user_token';
  return (dispatch) => {

    dispatch(sendCreateLoginUser(true));

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({auth:{
        email: email,
        password: password
        }})
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        dispatch(sendCreateLoginUser(false));
        try {
          const decoded = jwtDecode(response.jwt);
          dispatch(sendCreateLoginUserIsSuccess(response.jwt, decoded));
          // dispatch(push(redirect));
        } catch (e) {
          const error = new Error('bad token');
          dispatch(sendCreateLoginUserIsFailure(error));
        }
      })
      .catch((error) => {
        dispatch(sendCreateLoginUserIsFailure(error));
      })
  };
}

export function logout() {
    localStorage.removeItem('jwt');
    return {
        type: actionTypes.LOGOUT_USER
    }
}

export function logoutAndRedirect() {
    return (dispatch) => {
        dispatch(logout());
        dispatch(push('/login'));
    }
}
