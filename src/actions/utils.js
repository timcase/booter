import isObject from 'lodash/isObject';

export function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response)
  }

  return response.json().then(json => {
    const error = new Error(parseJSONerror(json) || response.statusText)
    return Promise.reject(Object.assign(error, { response }))
  })
}

export function parseJSONerror(json){
  if (isObject(json) === false){
    return null;
  }

  return Object.keys(json).map((key) => {
    return key + ' ' + json[key].join(', ')
  }).join(" ");
}

export function parseJSON(response) {
  return response.json()
}
