import { createReducer } from 'redux-act';
import {addTodo, updateTodo, deleteTodo, markAsCompletedTodo,
  markAllAsCompletedTodo} from '../actions';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  { text: 'Roll the dice',
    completed: false,
    id: 1
  },
  { text: 'Watch football',
    completed: false,
    id: 2
  },
  { text: 'Penalty kick',
    completed: true,
    id: 3
  }
]

export default createReducer({
  [addTodo]: (state, payload) => {
        return [
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: payload.text
          },
          ...state
        ]
  },
  [updateTodo]: (state, payload) => {
        return state.map(todo =>
          todo.id === payload.id ?
            { ...todo, text: payload.text } :
            todo
        )
  },
  [deleteTodo]: (state, payload) => {
    return state.filter(todo =>
      todo.id !== payload.id
    )
  },
  [markAsCompletedTodo]: (state, payload) => {
    return state.map(todo =>
      todo.id === payload.id ?
        { ...todo, completed: !todo.completed } :
        todo
    )
  },
  [markAllAsCompletedTodo]: (state) => {
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }))
  }

}, initialState);
