import * as actionTypes from '../constants/action_types';
import isObject from 'lodash/isObject';

export const sendGetTodos = (isRequesting) => {
  return {
    type: actionTypes.TODOS_SEND_GET,
    isRequesting: isRequesting
  };
}

export const sendGetIsSuccessTodos = (todos) => {
  return {
    type: actionTypes.TODOS_SEND_GET_IS_SUCCESS,
    todos: todos
  };
}

export const sendGetIsFailureTodos = (error) => {
  return {
    type: actionTypes.TODOS_SEND_GET_IS_FAILURE,
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

export const getTodos = () => {
  const url = 'http://localhost:3001/todos';
  return (dispatch) => {
    dispatch(sendGetTodos(true));

    fetch(url)
      .then(checkStatus)
      .then(parseJSON)
      .then((todos) => {
        dispatch(sendGetTodos(false));
        dispatch(sendGetIsSuccessTodos(todos))
      })
      .catch((error) => {
        dispatch(sendGetIsFailureTodos(error));
      })
  }
}

export const sendCreateTodo = (isRequesting) => {
  return {
    type: actionTypes.TODO_SEND_CREATE,
    isRequesting: isRequesting
  };
}

export const addTodo = (todo) => {
  return {
    type: actionTypes.TODO_ADD,
    todo: todo
  }
}

export const modifyTodo = (todo) => {
  return {
    type: actionTypes.TODO_MODIFY,
    todo: todo
  }
}

export const sendCreateIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_FAILURE,
    error: error.message
  };
}

export const createTodo = (todo) => {
  const url = 'http://localhost:3001/todos';
  return (dispatch) => {
    dispatch(sendCreateTodo(true));
    dispatch(addTodo(todo));

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: todo.text,
        completed: false,
        tag: todo.tag
      })
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((todo) => {
        dispatch(sendCreateTodo(false));
        dispatch(modifyTodo(todo))
      })
      .catch((error) => {
        dispatch(sendCreateIsFailureTodo(error));
      })
  };
}

export const sendUpdateTodo = (isRequesting) => {
  return {
    type: actionTypes.TODO_SEND_UPDATE,
    isRequesting: isRequesting
  };
}


export const sendUpdateIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_UPDATE_IS_FAILURE,
    error: error.message
  };
}

export const updateTodo = (todo, originalTodo) => {
  const url = 'http://localhost:3001/todos/' + todo.id;
  return (dispatch) => {
    dispatch(sendUpdateTodo(true));
    dispatch(modifyTodo(todo));

    fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: todo.id,
        text: todo.text,
        completed: todo.completed,
        tag: todo.tag
      })
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((todo) => {
        dispatch(sendUpdateTodo(false));
        dispatch(modifyTodo(todo));
      })
      .catch((error) => {
        dispatch(sendUpdateIsFailureTodo(error));
        dispatch(modifyTodo(originalTodo));
      });
  };
}

export const sendDeleteTodo = (isRequesting) => {
  return {
    type: actionTypes.TODO_SEND_DELETE,
    isRequesting: isRequesting
  }
}

export const removeTodo = (todo) => {
  return {
    type: actionTypes.TODO_REMOVE,
    todo: todo
  }
}

export const sendDeleteIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_DELETE_IS_FAILURE,
    error: error
  };
}

export const deleteTodo = (todo) => {
  const url = 'http://localhost:3001/todos/' + todo.id;
  return (dispatch) => {
    dispatch(sendDeleteTodo(true));
    dispatch(removeTodo(todo));

    fetch(url,{
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(sendDeleteTodo(false));

        return response;
      })
      .catch(() => dispatch(sendDeleteIsFailureTodo(true)));
  };
}
