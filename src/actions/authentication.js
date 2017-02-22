import * as actionTypes from '../constants/action_types';
import jwtDecode from 'jwt-decode';
import {push} from 'react-router-redux';
// import isObject from 'lodash/isObject';
import { SubmissionError } from 'redux-form';

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  if (response.status === 404) {
    throw new Error('not found');
  }
  else {
    throw new Error('network error');
  }
}

// function parseJSONerror(json){
//   if (isObject(json) === false){
//     return null;
//   }

//   return Object.keys(json).map((key) => {
//     return key + ' ' + json[key].join(', ')
//   }).join(" ");
// }

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
    userName: decoded.user_name
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

    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({auth:{
        email: email,
        password: password
      }})
    }).then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        dispatch(sendCreateLoginUser(false));
        try {
          const decoded = jwtDecode(response.jwt);
          dispatch(sendCreateLoginUserIsSuccess(response.jwt, decoded));
          dispatch(push(redirect));
        } catch (e) {
          const error = new Error('Bad JWT Token returned');
          dispatch(sendCreateLoginUserIsFailure(error));
        }
      })
      .catch((error) => {
        if (error.message === 'not found') {
          throw new SubmissionError({
            _error: 'Login failed, check email or password'});
        } else {
          dispatch(sendCreateLoginUserIsFailure(error));
        }
      })
  };
}

export const sendCreateUser = (isRequesting) => {
  return {
    type: actionTypes.USER_SEND_CREATE,
    isRequesting: isRequesting
  };
}

export const signupUser= (name, email, password, redirect="/") => {
  const url = 'http://localhost:3001/users';
  return (dispatch) => {

    dispatch(sendCreateUser(true));

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user:{
        name: name,
        email: email,
        password: password
      }})
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => {
        dispatch(sendCreateUser(false));
        try {
          const decoded = jwtDecode(response.jwt);
          dispatch(sendCreateLoginUserIsSuccess(response.jwt, decoded));
          dispatch(push(redirect));
        } catch (e) {
          const error = new Error('Bad username or password');
          dispatch(sendCreateLoginUserIsFailure(error));
        }
      })
      .catch((error) => {
        if (error.message === 'not found') {
          const error = new Error('Bad username or password');
          dispatch(sendCreateLoginUserIsFailure(error));
        } else {
          dispatch(sendCreateLoginUserIsFailure(error));
        }
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

