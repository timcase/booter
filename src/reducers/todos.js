import * as actions from '../constants/action_types'
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
  console.log(action.payload);

    switch (action.type) {
      case actions.ADD_TODO:
        return [
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.payload.text
          },
          ...state
        ]
      case actions.UPDATE_TODO:
        return state.map(todo =>
          todo.id === action.payload.id ?
            { ...todo, text: action.payload.text } :
            todo
        )
      case actions.DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.payload.id
        )
      case actions.COMPLETE_TODO:
        return state.map(todo =>
          todo.id === action.payload.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
      case actions.COMPLETE_ALL:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
      default:
        return state;
    }

}
