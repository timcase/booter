import * as actionTypes from '../constants/action_types';

export const sendGetTodos = () => {
  return {
    type: actionTypes.TODOS_SEND_GET
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

export const sendCreateTodo = (todo) => {
  return {
    type: actionTypes.TODO_SEND_CREATE,
    todo: todo
  };
}

export const addTodo = (todo) => {
  return {
    type: actionTypes.TODO_ADD,
    todo: todo
  }
}

export const modifyTodo = (id, todo) => {
  return {
    type: actionTypes.TODO_MODIFY,
    todo: todo,
    id: id
  }
}

export const sendCreateIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_FAILURE,
    error: error.message
  };
}

export const sendCreateIsSuccessTodo = () => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_SUCCESS,
  };
}

export const sendUpdateTodo = (todo) => {
  return {
    type: actionTypes.TODO_SEND_UPDATE,
    todo: todo
  };
}


export const sendUpdateIsFailureTodo = (error) => {
  return {
    type: actionTypes.TODO_SEND_UPDATE_IS_FAILURE,
    error: error.message
  };
}

export const sendUpdateIsSuccessTodo = () => {
  return {
    type: actionTypes.TODO_SEND_UPDATE_IS_SUCCESS,
  };
}

export const sendDeleteTodo = (todo) => {
  return {
    type: actionTypes.TODO_SEND_DELETE,
    todo: todo
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

export const sendDeleteIsSuccessTodo = () => {
  return {
    type: actionTypes.TODO_SEND_DELETE_IS_SUCCESS,
  };
}
