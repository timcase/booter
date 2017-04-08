import * as actionTypes from '../constants/action_types';
import {combineReducers } from 'redux';

const initialState = {
  isRequesting: false,
  error: ''
}

const byId = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
      return {
        ...state, ...action.departments.map(d => {return d.todos}).reduce((obj, todo) => {
          obj[todo.id] = todo;
          return obj
        }, {}), error: ''
      }
    case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
      return {
        ...state, ...action.todos.reduce((obj, todo) => {
          obj[todo.id] = todo;
          return obj
        }, {}), error: ''
      }
    default:
      return state;
  }

};

const allIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
      return [
        ...state, ...action.departments.map(d => {return d.todos}).map(t => { return t.id })
      ]
    case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
      return [
        ...state, ...action.todos.map(t => { return t.id })
      ]
    default:
      return state;

  }
};

// const allIds = (state = initialState,action) => {
//   switch (action.type) {
//     case actionTypes.DEPARTMENTS_SEND_GET_IS_SUCCESS:
//       return {
//         ...state, ...action.departments[0].todos.map(t => {  t.id })
//         , error: ''
//       }
//     case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
//       return {
//         ...state, ...action.todos.map(t => { t.id })
//       }
//     default:
//       return state;
// }



// const oldTodos = ( state = initialState, action) => {

//     switch (action.type) {
//       case actionTypes.TODOS_SEND_GET:
//         return {
//           ...state, isRequesting: action.isLoading, error: ''
//         }
//       case actionTypes.TODOS_SEND_GET_IS_SUCCESS:
//         return {
//           ...state,  todos: action.todos, error: ''
//         }
//       case actionTypes.TODOS_SEND_GET_IS_FAILURE:
//         return {
//           ...state, error: action.error
//         }
//       case actionTypes.TODO_ADD:
//         return {
//           ...state, todos: [...state.todos,
//           {
//             id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//             completed: false,
//             text: action.todo.text,
//             tag: action.todo.tag
//           }]
//           }
//       case actionTypes.TODO_SEND_CREATE:
//         return {
//           ...state, isRequesting: action.isLoading, error: ''
//         }
//       case actionTypes.TODO_SEND_CREATE_IS_FAILURE:
//         return {
//           ...state, error: action.error
//         }
//       case actionTypes.TODO_SEND_UPDATE:
//         return {
//           ...state, isRequesting: action.isLoading, error: ''
//         }
//       case actionTypes.TODO_MODIFY:
//         return {
//           ...state, todos: state.todos.map(todo => todo.id === action.todo.id ?
//             {...todo, id: action.todo.id, text: action.todo.text,
//               completed: action.todo.completed, tag: action.todo.tag }
//             : todo)
//         }
//       case actionTypes.TODO_SEND_UPDATE_IS_FAILURE:
//         return {
//           ...state, error: action.error
//         }
//       case actionTypes.TODO_SEND_DELETE:
//         return {
//           ...state, isRequesting: action.isLoading
//         }
//       case actionTypes.TODO_REMOVE:
//         return {
//           ...state, todos: state.todos.filter(todo => todo.id !== action.todo.id)
//         }
//       case actionTypes.TODO_SEND_DELETE_IS_FAILURE:
//         return {
//           ...state, error: action.error
//         }
//       default:
//         return state;
//     }

// }

const todos = combineReducers({byId: byId, allIds: allIds});
export default todos;

const getAllTodos= (state) =>{
  if (state.allIds.length > 0) {
    return state.allIds.map(id => state.byId[id])
  } else {
    return [];
  }
}

export const getVisibleTodos = (state, filter, tag) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'SHOW_ALL':
      return allTodos
    case 'SHOW_COMPLETED':
      return allTodos.filter(t => t.completed).filter(todo => todo.tag === tag)
    case 'SHOW_INCOMPLETE':
      return allTodos.filter(t => !t.completed).filter(todo => todo.tag === tag)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
