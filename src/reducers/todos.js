import * as types from '../constants/action_types'
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

export default function todos( state = initialState, action){

    switch (action.type) {
      case types.ADD_TODO:
        return [
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          },
          ...state
        ]
      case types.UPDATE_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text } :
            todo
        )
      case types.DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        )
      case types.COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
      case types.COMPLETE_ALL:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
      default:
        return state;
    }

}
