import * as actionTypes from '../constants/action_types';

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

export const sendGetIsFailureTodos = (hasFailure) => {
  return {
    type: actionTypes.TODOS_SEND_GET_IS_FAILURE,
    hasFailure: hasFailure
  };
}

export const getTodos = () => {
    const url = 'http://5883b3c16d8e0d1200b7063a.mockapi.io/todos';
    return (dispatch) => {
        dispatch(sendGetTodos(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(sendGetTodos(false));

                return response;
            })
            .then((response) => response.json())
        .then((todos) => {
          dispatch(sendGetIsSuccessTodos(todos))})
            .catch(() => dispatch(sendGetIsFailureTodos(true)));
    };
}

export const sendCreateTodo = (isRequesting) => {
  return {
    type: actionTypes.TODO_SEND_CREATE,
    isRequesting: isRequesting
  };
}

export const sendCreateIsSuccessTodo = (todo) => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_SUCCESS,
    todo: todo
  }
}

export const sendCreateIsFailureTodo = (hasFailure) => {
  return {
    type: actionTypes.TODO_SEND_CREATE_IS_FAILURE,
    hasFailure: hasFailure
  };
}

export const createTodo = (todo) => {
    const url = 'http://5883b3c16d8e0d1200b7063a.mockapi.io/todos';
    return (dispatch) => {
        dispatch(sendCreateTodo(true));

      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: todo.text,
          completed: false
        })
      })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(sendCreateTodo(false));

                return response;
            })
            .then((response) => response.json())
        .then((todo) => {
          dispatch(sendCreateIsSuccessTodo(todo))})
            .catch(() => dispatch(sendCreateIsFailureTodo(true)));
    };
}
