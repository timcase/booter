import * as actionTypes from '../constants/action_types';

export const sendGetTodos = (isLoading) => {
  return {
    type: actionTypes.TODOS_SEND_GET,
    isLoading: isLoading
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
