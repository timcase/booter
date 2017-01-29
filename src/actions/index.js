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

// export const updateTodo = (todo, originalTodo) => {
//   const url = 'http://localhost:3001/todos/' + todo.id;
//   return (dispatch) => {
//     dispatch(sendUpdateTodo(true));
//     dispatch(modifyTodo(todo));

//     fetch(url,{
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         id: todo.id,
//         text: todo.text,
//         completed: todo.completed
//       })
//     })
//       .then(checkStatus)
//       .then(parseJSON)
//       .then((todo) => {
//         dispatch(sendUpdateTodo(false));
//         dispatch(modifyTodo(todo));
//       })
//       .catch((error) => {
//         dispatch(sendUpdateIsFailureTodo(error));
//         dispatch(modifyTodo(originalTodo));
//       });
//   };
// }

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

// export const deleteTodo = (todo) => {
//   const url = 'http://localhost:3001/todos/' + todo.id;
//   return (dispatch) => {
//     dispatch(sendDeleteTodo(true));
//     dispatch(removeTodo(todo));

//     fetch(url,{
//       method: 'DELETE'
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }

//         dispatch(sendDeleteTodo(false));

//         return response;
//       })
//       .catch(() => dispatch(sendDeleteIsFailureTodo(true)));
//   };
// }
