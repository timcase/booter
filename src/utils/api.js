import 'whatwg-fetch';
import isObject from 'lodash/isObject';

const HOST = 'http://localhost:3001/';
const HEADERS = {'Content-Type': 'application/json'};

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

function request(url, options){
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export const get = (path, options={}) => {
  return request(HOST + path, Object.assign({}, {method: 'GET',
  headers: HEADERS}, options));
}

export const post = (path, options={}) => {
  return request(HOST + path, Object.assign({}, {method: 'POST',
    headers: HEADERS, body: JSON.stringify(options['payload'])}, options));
}

