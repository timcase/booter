import { handleActions } from 'redux-actions';

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

export default handleActions({

  TODO_ADD: (state, action) => ([
    {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.payload.text
    },
    ...state
  ]),
  TODO_UPDATE: (state, action) => (
      state.map(todo =>
      todo.id === action.payload.id ?
        { ...todo, text: action.payload.text } :
        todo
    )
  ),
  TODO_DELETE: (state, action) => (
      state.filter(todo =>
        todo.id !== action.payload.id
      )
  ),
  TODO_MARK_COMPLETED: (state, action) => (
    state.map(todo =>
      todo.id === action.payload.id ?
        { ...todo, completed: !todo.completed } :
        todo
    )
  ),
  TODO_MARK_ALL_COMPLETED: (state, action) => (
     state.map(todo => ({
      ...todo,
       completed: !state.every(todo => todo.completed)
    }))
  )

}, initialState )
