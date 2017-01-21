import * as actionTypes from '../constants/action_types';

export const sendGetRequestTodos = (isLoading) => {
  return {
    type: actionTypes.TODOS_SEND_GET_REQUEST,
    isLoading: isLoading
  };
}

export const sendGetRequestSuccessfulTodos = (todos) => {
  return {
    type: actionTypes.TODOS_SEND_GET_REQUEST_SUCCESSFUL,
    todos: todos
  };
}

export const sendGetRequestErrorTodos = (hasError) => {
  return {
    type: actionTypes.TODOS_SEND_GET_REQUEST_ERROR,
    hasError: hasError
  };
}

export const getTodos = () => {
    const url = 'http://5883b3c16d8e0d1200b7063a.mockapi.io/todos';
    return (dispatch) => {
        dispatch(sendGetRequestTodos(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(sendGetRequestTodos(false));

                return response;
            })
            .then((response) => response.json())
        .then((todos) => {
          console.log(todos);
          dispatch(sendGetRequestSuccessfulTodos(todos))})
            .catch(() => dispatch(sendGetRequestErrorTodos(true)));
    };
}
