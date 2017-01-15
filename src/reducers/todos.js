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
  }
]

export default function todos( state = initialState, action){

    switch (action.type) {
      case 'ADD_TODO':
        return [
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          },
          ...state
        ]
      case 'UPDATE_TODO':
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text } :
            todo
        )
      case 'DELETE_TODO':
        return state.filter(todo =>
          todo.id !== action.id
        )
      default:
        return state;
    }

}
