import * as actionTypes from '../constants/action_types';
import { push } from 'react-router-redux';
import * as utils from './utils';
import { normalize } from 'normalizr';
import * as schemas from '../schemas';

export const sendGetTodos = (isRequesting) => {
  return {
    type: actionTypes.TODOS_SEND_GET,
    meta: {isRequesting: isRequesting}
  };
}

export const sendGetIsSuccessTodos = (todos) => {
  return {
    type: actionTypes.TODOS_SEND_GET_IS_SUCCESS,
    payload: todos.entities.todos
  };
}

export const sendGetIsFailureTodos = (error) => {
  return {
    type: actionTypes.TODOS_SEND_GET_IS_FAILURE,
    error: error.message
  };
}

export const redirectToOtherList = (path) => {
  return (dispatch) => {
    dispatch(push(path));
  }
}

export const getTodos = () => {
  return (dispatch, state) => {
    const url = `http://localhost:3001/users/${state().authentication.userId}/todos`;
    dispatch(sendGetTodos(true));

    fetch(url, { credentials: 'include', headers: {
      'Authorization': `Bearer ${state().authentication.jwt}`
      }
    })
      .then(utils.checkStatus)
      .then(utils.parseJSON)
      .then((todos) => {
        dispatch(sendGetTodos(false));
        dispatch(sendGetIsSuccessTodos(normalize(todos, schemas.TodoList)))
      })
      .catch((error) => {
        dispatch(sendGetIsFailureTodos(error));
      })
  }
}

export const sendCreateTodo = (isRequesting) => {
  return {
    type: actionTypes.TODO_SEND_CREATE,
    meta: {isRequestng: isRequesting}
  };
}

export const addTodo = (todo) => {
  return {
    type: actionTypes.TODO_ADD,
    payload: todo
  }
}

export const modifyTodo = (todo) => {
  return {
    type: actionTypes.TODO_MODIFY,
    payload: todo
  }
}

export const sendCreateIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_FAILURE,
    error: error.message
  };
}

export const createTodo = (todo) => {
  console.log(todo);
  return (dispatch, state) => {
    const url = `http://localhost:3001/users/${state().authentication.userId}/todos`;
    dispatch(sendCreateTodo(true));
    dispatch(addTodo(todo));

    fetch(url,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state().authentication.jwt}`
      },
      body: JSON.stringify({
        text: todo.text,
        completed: false,
        tag: todo.tag,
        userId: state().authentication.userid
      })
    })
      .then(utils.checkStatus)
      .then(utils.parseJSON)
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
    meta: {isRequesting: isRequesting}
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
  return (dispatch, state) => {
    dispatch(sendUpdateTodo(true));
    dispatch(modifyTodo(todo));

    fetch(url,{
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state().authentication.jwt}`
      },
      body: JSON.stringify({
        id: todo.id,
        text: todo.text,
        completed: todo.completed,
        tag: todo.tag
      })
    })
      .then(utils.checkStatus)
      .then(utils.parseJSON)
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
    meta: {isRequesting: isRequesting}
  }
}

export const removeTodo = (todo) => {
  return {
    type: actionTypes.TODO_REMOVE,
    payload: todo
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
  return (dispatch, state) => {
    dispatch(sendDeleteTodo(true));
    dispatch(removeTodo(todo));

    fetch(url,{
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state().authentication.jwt}`
      },
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
